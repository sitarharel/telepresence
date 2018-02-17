import RPi.GPIO as GPIO
import time
import urllib2
import json

GPIO.setmode(GPIO.BOARD)

left_pin = 35
right_pin = 32

GPIO.setup(right_pin, GPIO.OUT)
GPIO.setup(left_pin, GPIO.OUT)

right = GPIO.PWM(right_pin, 50)
left = GPIO.PWM(left_pin, 50)

left.start(0)
right.start(0)

url = "http://tel.sitarbucks.com/robot/controls"

try:
    while True:
        try:
            controls = json.loads(urllib2.urlopen(url).read())
        except urllib2.HTTPError, err:
            controls = {"right": 0, "left": 0}
        right.ChangeDutyCycle(controls["right"])
        left.ChangeDutyCycle(controls["left"])
        time.sleep(0.2)


except KeyboardInterrupt:
        right.stop()
        left.stop()
        GPIO.cleanup()
