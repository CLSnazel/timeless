#include "Alarm.h"

Alarm::Alarm(String id) {
  this->id = id;
  this->minute=0;
  this->hour=0;
  this->active=true;
  this->snooze_repeat_times=0;
  this->snooze_minutes=0;
}

Alarm::Alarm(String id, int minute,  int hour) {
  this->id = id;
  this->minute=minute;
  this->hour=hour;
  this->active=true;
  this->snooze_repeat_times=0;
  this->snooze_minutes=0;
}

Alarm::Alarm(String id, int minute, int hour, bool active) {
  this->id = id;
  this->minute=minute;
  this->hour=hour;
  this->active=active;
  this->snooze_repeat_times=0;
  this->snooze_minutes=0;
}

Alarm::Alarm(String id, int minute, int hour, bool active, int snooze_repeat_times, int snooze_minutes){
  this->id = id;
  this->minute=minute;
  this->hour=hour;
  this->active=active;
  this->snooze_repeat_times=snooze_repeat_times;
  this->snooze_minutes=snooze_minutes;
  
}
void Alarm::printId() {
  String line = "\tid:"+this->id+",";
  Serial.println(id_line);
}

void Alarm::print(){
  Serial.println("{");
  printId();
  Serial.println("}");
}
void Alarm::update_minute(int new_minute) {
  minute = new_minute;
}

void Alarm::update_hour(int new_hour) {
  hour = new_hour;
}
