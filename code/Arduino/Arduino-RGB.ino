// LED fixe
const int steadyLEDgreenPin = 3;
const int steadyLEDbluePin = 4;
const int steadyLEDredPin = 5;

// LED variable
const int varLEDgreenPin = 9;
const int varLEDbluePin = 10;
const int varLEDredPin = 11;

// Pour les entrées utilisées
const int buttonPin = 2;
const int switchPin = 8;
const int potentiometerPin = A0;


void setup()
{
    // Initialisation des LEDs fixe
    for (int ledPin = steadyLEDgreenPin; ledPin <= steadyLEDredPin; ledPin++){
        pinMode(ledPin, OUTPUT);
        digitalWrite(ledPin, LOW);
    }

    // Initialisation des LEDs variable
    for (int varLEDpin = varLEDgreenPin; varLEDpin <= varLEDredPin; varLEDpin++){
        pinMode(varLEDpin, OUTPUT);
        digitalWrite(varLEDpin, LOW);
    }

    // Initialisation des entrées
    pinMode(buttonPin, INPUT_PULLUP);
    pinMode(switchPin, INPUT);
    pinMode(potentiometerPin, INPUT);
}

// Define an enumeration of Color values with int8_t
enum Color : int8_t {RED, YELLOW, GREEN, CYAN, BLUE, MANGENTA};
enum Color steadyLEDcolor = RED;
// Define another enumeration of ColorTransition values with int8_t
enum ColorTransition : int8_t {TO_YELLOW, TO_GREEN, TO_CYAN, TO_BLUE, TO_MAGENTA, TO_RED};
enum ColorTransition colorTransition = TO_YELLOW;

uint8_t redValue = 255;
uint8_t greenValue = 0;
uint8_t blueValue = 0;

void loop()
{
    switch (colorTransition) {
        case TO_YELLOW:
            if (greenValue == 255) {
                colorTransition = TO_GREEN;
            }
            else {
                greenValue++;
                delay(10);
            }
        break;
        case TO_GREEN:
            if (redValue == 0) {
                colorTransition = TO_CYAN;
            }
            else {
                redValue--;
                delay(10);
            }
        break;
        case TO_CYAN:
            if (blueValue == 255){
                colorTransition = TO_BLUE;
            }
            else {
                blueValue++;
                delay(10);
            }
        break;
        case TO_BLUE:
            if (greenValue == 0){
                colorTransition = TO_MAGENTA;
            }
            else {
                greenValue--;
                delay(10);
            }
        break;
        case TO_MAGENTA:
            if (redValue == 255){
                colorTransition = TO_RED;
            }
            else {
                redValue++;
                delay(10);
            }
        break;
        case TO_RED:
            if (blueValue == 0){
                colorTransition = TO_YELLOW;
            }
            else {
                blueValue--;
                delay(10);
            }
    }

    analogWrite(varLEDredPin, redValue);
    analogWrite(varLEDgreenPin, greenValue);
    analogWrite(varLEDbluePin, blueValue);
}