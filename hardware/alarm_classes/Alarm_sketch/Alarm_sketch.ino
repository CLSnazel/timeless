# include "Alarm.h"
# include "AlarmArray.h"
//#define Alarm ALARM1
//
//Alarm allAlarms[2500]; 
AlarmArray allAlarms = AlarmArray();
int id_count = 0;
void setup() {
  // put your setup code here, to run once:
//  Alarm 
  Serial.begin(115200);
//  for(int i = 0; i < 2500; i++) {
//    allAlarms[i] = Alarm();
//  }
//  allAlarms = 
//  allAlarms.insert_alarm("1", 10, 30, true, 0, 0);
}

void loop() {
  // put your main code here, to run repeatedly:
  // Alarm ALARM1 = Alarm();
  // ALARM1.print();

  add_random_alarm();
  allAlarms.print_alarms();
  Serial.println("==================");
  if (id_count > 10) {
    remove_random_alarm();
  }
  // Serial.println("hello");
  delay(4000);
}

void add_random_alarm() {
  String id = String(id_count);
  int minute = random(0,60);
  int hour = random(0,24);
  allAlarms.insert_alarm(id, minute , hour, true, 0, 0);
  id_count += 1;
}

void remove_random_alarm() {
  int random_id = random(0, id_count);
  Serial.println("Remove id:"+String(random_id));
  allAlarms.delete_alarm(String(random_id));
}