# include "Alarm.h"

//#define Alarm ALARM1
void setup() {
  // put your setup code here, to run once:
//  Alarm 
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  Alarm ALARM1 = Alarm("1");
  ALARM1.print();
  delay(5000);
}
