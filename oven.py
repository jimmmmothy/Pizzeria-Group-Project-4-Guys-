import time, sys
from fhict_cb_01.CustomPymata4 import CustomPymata4

#------------------------------
# Initialized global variables
#------------------------------
isFull = False
LED_PINS = {
    "red": 4,
    "green": 5,
    "blue": 6,
    "yellow": 7 
}
BUZZERPIN = 3
DHTPIN  = 12

#-----------
# functions
#-----------
def setup(): # Taken from examples 
    global board
    board = CustomPymata4(com_port = "COM3")
    board.displayOn()
    board.set_pin_mode_dht(DHTPIN, sensor_type=11, differential=.05)
    board.set_pin_mode_pwm_output(BUZZERPIN)
    for pin in LED_PINS:
        board.set_pin_mode_digital_output(LED_PINS[pin])

    time.sleep(1)

def countdown(seconds):
    board.digital_pin_write(LED_PINS["red"], 1)
    global isFull
    isFull = True

    while seconds >= 0:
        mins, secs = divmod(seconds, 60) # modulus division
        timer = '{:02d}.{:02d}'.format(mins, secs)
        board.displayShow(timer)
        time.sleep(1)
        seconds -= 1

    board.digital_pin_write(LED_PINS["red"], 0)
    isFull = False

def cook():
    board.digital_pin_write(LED_PINS["green"], 0)
    countdown(10) # TODO: Figure out how to input this time
    board.digital_pin_write(LED_PINS["green"], 1)

def buzz():
    for i in range(3):
        board.pwm_write(BUZZERPIN, 1)
        time.sleep(0.8)
        board.pwm_write(BUZZERPIN, 0)
        time.sleep(0.8)

def exit():
    board.shutdown()
    sys.exit(0)