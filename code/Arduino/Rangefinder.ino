long cm = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);  // effacer le déclencheur
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  // Définir la broche de déclenchement à l'état HIGH pendant 10 microsecondes
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  // Lire la broche d'écho et renvoie le temps de parcours de l'onde sonore en microsecondes *0.01723
  return (pulseIn(echoPin, HIGH)*0.01723);
  
}

void setup()
{
  Serial.begin(9600);

  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  cm =readUltrasonicDistance(7, 6);

  Serial.print(cm);
  Serial.println("cm");
  
  if (cm > 150) {
    digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  }
  if (cm <= 150 && cm > 100) {
    digitalWrite(2, LOW);
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
  }
  if (cm <= 100 && cm > 75) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
  }
  if (cm <= 75) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
  }

  delay(100); // Attendre 100 millisecond(s)
}