#include "Alarm.h"

Alarm::Alarm() {
  this->id = "none";
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

void Alarm::update_minute(int new_minute) {
  minute = new_minute;
}

void Alarm::update_hour(int new_hour) {
  hour = new_hour;
}

void Alarm::update_active (bool new_active){
  active = new_active;
}
void Alarm::update_snooze_repeat_times (int new_snooze_repeat){
  snooze_repeat_times = new_snooze_repeat;
}
void Alarm::update_snooze_minutes (int new_snooze_minutes){
  snooze_minutes = new_snooze_minutes;
}

void Alarm::print_id() {
  String line = "  id:"+this->id+",";
  Serial.println(line);
}
void Alarm::print_hour() {
  String line = "  hour:"+String(this->hour)+",";
  Serial.println(line);
}
void Alarm::print_minute() {
  String line = "  minute:"+String(this->minute)+",";
  Serial.println(line);
}

void Alarm::print(){
  Serial.println("{");
  print_id();
  print_hour();
  print_minute();
  Serial.println("}");
}

float Alarm::get_alarm_float() {
  return float(float(hour)+(float(minute)/60.00));
}
