// Définir des pseudo-constantes pour les broches correspondantes aux LEDs
#define LED_16_PIN 0
#define LED_25_PIN 1
#define LED_34_PIN 2
#define LED_7_PIN 3
// Définir une pseudo-constante pour la broche du capteur
#define SENSOR 4
#define notConnectedPin 5 // Broche non-utilisée

void setup()
{
  initPins();
  initRandomSerie();
}

void loop()
{
  if (isSequenceTriggered()){
    for(int steps = 1; steps <= 10; steps++){ // Boucle pour montrer plusieurs fois le résultat du dé
      displayDiceFace(transcodeNumber(generateNewFaceNumber())); // Affiché la face du dé
      delay(250);
    }
  }
  delay(10);
}

void initPins() // fonction qui initialise les broches pour chaque LED et le capteur
{
    for(int leds = LED_16_PIN; leds <= LED_7_PIN; leds++){
      pinMode(leds, OUTPUT);
      digitalWrite(leds, LOW);
    }
    pinMode(SENSOR, INPUT);
}

void displayDiceFace(byte ledState) // Fonction pour afficher la face d'un dé
{
    for(int ledPin = LED_16_PIN; ledPin <= LED_7_PIN; ledPin++){
      digitalWrite(ledPin, bitRead(ledState, ledPin)); // Déterminer si une LED doit être allumée ou non
    }
}

// Fonction pour transformer un nombre en LED activées / désactivées qui correspond à la face d'un dé
byte transcodeNumber(int number)
{
  switch(number) { // Crée une séquence d'instruction basée sur la valeur du paramètre 'number'
    case 1:
      return 0b1000; 

    case 2:
      return 0b0001; 

    case 3:
      return 0b1001; 

    case 4:
      return 0b0101;

    case 5:
      return 0b1101;

    case 6:
      return 0b0111;
    
    default:
      return 0b0000;
  }
}

void initRandomSerie() // Fonction pour initialiser le générateur de nombres aléatoires
{
  randomSeed(analogRead(notConnectedPin));
}

// Fonction qui génère un nombre aléatoire qui ne correspond pas avec la précédent pour éviter la triche
int generateNewFaceNumber()
{
    static int previousDisplayedNumber = 0;
    int newNumber;
    do {
        newNumber = random(1,7);
    }
    // On boucle tant que ces deux conditions sont remplies
    while(((newNumber == previousDisplayedNumber) || (newNumber + previousDisplayedNumber == 7)));

    return newNumber;
}

bool isSequenceTriggered() // Fonction pour vérifier si la séquence doit commencer ou non
{
  static bool previousSwitchLevel = LOW;
  static bool currentSwitchLevel = LOW;

  previousSwitchLevel = currentSwitchLevel;
  currentSwitchLevel = digitalRead(SENSOR);
  
  return (currentSwitchLevel == HIGH && previousSwitchLevel == LOW);
}