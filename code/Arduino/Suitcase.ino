#include <Servo.h>

int rightMotorSpeed = 5;
int rightMotorPositive = 6;
int rightMotorNegative = 7;

int leftMotorSpeed = 4;
int leftMotorPositive = 2;
int leftMotorNegative = 3;

const int trigPin = 12;
const int echoPin = 11;

float duration, distance;

void setup() 
{
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(rightMotorSpeed, OUTPUT);
  pinMode(rightMotorPositive, OUTPUT);
  pinMode(rightMotorNegative, OUTPUT);
  pinMode(leftMotorSpeed, OUTPUT);
  pinMode(leftMotorPositive, OUTPUT);
  pinMode(leftMotorNegative, OUTPUT);
  digitalWrite(rightMotorSpeed, HIGH);
  digitalWrite(leftMotorSpeed, HIGH);
  
  Serial.begin(9600);
}

void loop(){
  sense();
  if(distance>50)
  {
    forward();
  }
  else
  {
    stops();
  }
  if(distance>50) 
  {
    left();
  }
  else
  {
    right();
  }
}


void sense() 
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  distance = (duration*.0343)/2;
  Serial.print("Distance: ");
  Serial.println(distance);
  delay(100);
}

void forward()
{
  digitalWrite(rightMotorPositive, HIGH);
  digitalWrite(rightMotorNegative, LOW);
  digitalWrite(leftMotorPositive, HIGH);
  digitalWrite(leftMotorNegative, LOW);
}

void stops()
{
  digitalWrite(rightMotorPositive, LOW);
  digitalWrite(rightMotorNegative, LOW);
  digitalWrite(leftMotorPositive, LOW);
  digitalWrite(leftMotorNegative, LOW);
}

void backward()
{
  digitalWrite(rightMotorPositive, LOW);
  digitalWrite(rightMotorNegative, HIGH);
  digitalWrite(leftMotorPositive, LOW);
  digitalWrite(leftMotorNegative, HIGH);
}

void left()
{
  digitalWrite(rightMotorPositive, HIGH);
  digitalWrite(rightMotorNegative, LOW);
  digitalWrite(leftMotorPositive, LOW);
  digitalWrite(leftMotorNegative, LOW);
}

void right()
{
  digitalWrite(rightMotorPositive, LOW);
  digitalWrite(rightMotorNegative, LOW);
  digitalWrite(leftMotorPositive, HIGH);
  digitalWrite(leftMotorNegative, LOW);
}

