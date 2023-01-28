// Déclarer les constantes global

#include <arduino.h>

const uint8_t firstLEDpin = 2;
const uint8_t lastLEDpin = 9;
const uint8_t numberOfLED = 8;
const uint8_t potentiometerPin = A0;
int potentiometreValue;
int numberOfLitLED;

void setup(){
    for(int ledPin = firstLEDpin; ledPin <= lastLEDpin; ledPin++){
        pinMode(ledPin, OUTPUT);
        digitalWrite(ledPin, LOW);
    }
    Serial.begin(9600);
    pinMode(potentiometerPin, INPUT);
}

int ledPin = firstLEDpin;

void loop(){
    potentiometreValue = analogRead(potentiometerPin);
    numberOfLitLED = map(potentiometreValue, 1, 1023, 0, numberOfLED );
    Serial.println(potentiometreValue);

    for(int ledPin = firstLEDpin; ledPin <= numberOfLitLED + firstLEDpin - 1; ledPin++){
        digitalWrite(ledPin, HIGH);
    }
    for(int ledPin = lastLEDpin; ledPin >= numberOfLitLED + firstLEDpin; ledPin--){
        digitalWrite(ledPin, LOW);
    }
    delay(10);
}