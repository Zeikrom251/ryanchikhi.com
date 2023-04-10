#include <arduino.h>

const uint8_t startStopButtonPin = 2;
const uint8_t setResetButtonPin = 13;

const uint8_t firstBCDunitsPin = 3;
const uint8_t lastBCDunitsPin = 6;
const uint8_t firstBCDtensPin = 8;
const uint8_t lastBCDtensPin = 11;

const uint8_t unitsBlankPin = 7;
const uint8_t tensBlankPin = 12;


struct LogicalSignal {
  uint8_t pin;  // pin number to be declared as INPUT our INPUT_PULLUP
  byte levels;  // current level on bit rank 0, previous level on bit rank 1
};

#define updateSignal(signal) do {\
    signal.levels <<= 1;\
    signal.levels = ((digitalRead(signal.pin) | signal.levels) & 0b11);\
  } while(0)

#define risingEdge(signal) (signal.levels == 0b01)

struct LogicalSignal startStopButton = {startStopButtonPin, 0b00};
struct LogicalSignal setResetButton =  {setResetButtonPin, 0b00};

#define unitsDigit(number) (number % 10)
#define tensDigit(number) (number / 10)

void setup()
{
    initPins();
    steadyDisplay();
}


void loop()
{ 
    updateSignal(startStopButton);
    updateSignal(setResetButton);

    static int number = 20;
    static bool stopped = false;

    if (risingEdge(startStopButton)){
        stopped = !stopped;
    }
    if (risingEdge(setResetButton)){
        if (number == 0) {
            number == 20;
            stopped = false;
        }
    }

    if (!stopped && clockSecondTick()){
        if (number > 0) {
            number--;
        }
    }

    displayNumber(number);
}

void initPins()
{
    for(int units = firstBCDunitsPin; units <= lastBCDunitsPin; units++)
    {
        pinMode(units, OUTPUT);
        digitalWrite(units, LOW);
    }
    for(int tens = firstBCDtensPin; tens <= lastBCDtensPin; tens++)
    {
        pinMode(tens, OUTPUT);
        digitalWrite(tens, LOW);
    }

    pinMode(startStopButtonPin, INPUT);
    pinMode(setResetButtonPin, INPUT);

    pinMode(unitsBlankPin, OUTPUT);
    pinMode(tensBlankPin, OUTPUT);
}

void steadyDisplay()
{
    digitalWrite(unitsBlankPin, HIGH);
    digitalWrite(tensBlankPin, HIGH);
}

void displayDigit(int digit, int BCDinputFirstPin)
{
    for(int pin = BCDinputFirstPin; pin <= BCDinputFirstPin + 3; pin++)
    {
        digitalWrite(pin, bitRead(digit, pin - BCDinputFirstPin));
    }
}

void displayNumber(int number)
{
    int units = unitsDigit(number);
    int tens = tensDigit(number);

    displayDigit(units, firstBCDunitsPin);
    displayDigit(tens, firstBCDtensPin);
}

bool clockSecondTick()
{
    static unsigned long previousMillis = millis();

    if (millis() - previousMillis >= 1000)
    {
        previousMillis += 1000;
        return true;
    }
    return false;
}