//CTP22_ex4v1

//Faire un chenilliard marche-arrêt :

#include <arduino.h>

const int firstLEDpin = 2;
const int lastLEDpin = 9;
const int buttonPin = 12;
const int chaseDuration = 100;
const int LEFT = +1;
const int RIGHT = -1;
int chaseDirection = LEFT;
bool previousButtonLevel = LOW;
bool currentButtonLevel = LOW;
bool isChasing = true;


void setup()
{
  for(int ledPin = firstLEDpin; ledPin <= lastLEDpin; ledPin++){
    pinMode(ledPin, OUTPUT);
    digitalWrite(ledPin, LOW);
    pinMode(buttonPin, INPUT_PULLUP);
  }
}

int ledPin = firstLEDpin;

unsigned long previousMillis = millis();

void loop()
{
  previousButtonLevel = currentButtonLevel;
  currentButtonLevel = digitalRead(buttonPin);
  if (currentButtonLevel == LOW && previousButtonLevel == HIGH) { // Front descendant
      isChasing = !isChasing;
  }

  if (isChasing) {
    if (millis() - previousMillis >= chaseDuration){
        previousMillis += chaseDuration;
        digitalWrite(ledPin, LOW);
        ledPin += chaseDirection;
        digitalWrite(ledPin, HIGH);
    }
    if (chaseDirection == LEFT  && ledPin == lastLEDpin || 
        chaseDirection == RIGHT && ledPin == firstLEDpin) {
      chaseDirection = -chaseDirection;
    }
  }
  else {
    previousMillis = millis();
  }
  delay(10);
}