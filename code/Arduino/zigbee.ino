
void setup()
{
  //Initialisation de la liaison série UART0 à 9600 bauds
  Serial.begin(9600, SERIAL_8N1);
  //Initialisation de la liaison série UART1 à 9600 bauds
  Serial1.begin(9600, SERIAL_8N1);
  Serial.println("Test zigbee");
}

int incomingByte = 0;
int tableau [100];
int i = 0;

void loop()
{
  // Cette partie, c'est pour pouvoir écrire sur notre moniteur série
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    Serial.write(incomingByte);

    if (incomingByte != '\r') {
      tableau[i] = incomingByte;
      i++;
    }

    if (incomingByte == '\r') {
      for(int y = 0; y < i; y++) {
        int valeur = tableau[y];
        Serial1.write(valeur);
      }
      Serial1.println();
      i = 0;
    }
  }
  
  // Ici c'est la partie réception
  if (Serial1.available() > 0) {
    incomingByte = Serial1.read();

    Serial.write(incomingByte);
  }
}