#include "AlarmArray.h"
// #include <ESP32Time.h>

AlarmArray::AlarmArray() {
  
}

bool AlarmArray::is_full(){
  return total_alarms == max_alarms;
}

void AlarmArray::print_alarms(){
  if(total_alarms == 0){
    Serial.println("No alarms in array");
  } else {
    for(int i=0; i < total_alarms; i++) {
      alarms[i].print();
    }  
  }
}

// sort the alarms from soonest to latest
void AlarmArray::sort_alarms() {
  Alarm key;
  int j;
  for(int i = 1; i < total_alarms; i++) {
    key = alarms[i];
    j = i;
    while(j > 0 && alarms[j-1].get_alarm_float() > key.get_alarm_float()) {
      // Serial.println(String(alarms[j-1].get_alarm_float())+">"+String(key.get_alarm_float()));
      alarms[j] = alarms[j-1];
      j--;
    }
    alarms[j] = key;
  }
}

void AlarmArray::insert_alarm(String id, int minute, int hour, bool active, int snooze_repeat_times, int snooze_minutes) {
  if(!is_full()) {
    alarms[total_alarms] = Alarm(id, minute, hour, active, snooze_repeat_times, snooze_minutes);
    total_alarms ++;
    sort_alarms();
  }
}

// void AlarmArray::edit_alarm()

void AlarmArray::delete_alarm(String id) {
  for(int i = 0; i < total_alarms; i++) {
    if(alarms[i].get_id() = id) {
      
    }
  }
}