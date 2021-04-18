#include "AlarmArray.h"
#include "ArduinoJson.h"
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

void AlarmArray::insert_from_json(uint8_t *data) {
  StaticJsonDocument<384> body;
  deserializeJson(body, (char *)data);
  if(!is_full()) {
    String id = body["id"];
    int minute = int(body["minute"]);
    int hour = int(body["hour"]);
    alarms[total_alarms] = Alarm(id, minute, hour);
    total_alarms ++;
    sort_alarms();
    print_alarms();
  }
  return;
}

void AlarmArray::delete_alarm(String id) {
  for(int i = 0; i < total_alarms; i++) {
    if(alarms[i].get_id() == id) {
      for(int j = i; j < total_alarms - 1; j++){
        alarms[j] = alarms[j + 1];
      }
      total_alarms--;
      break;
    } else if (i == total_alarms - 1) {
      Serial.println("Delete: No alarm with that id found");
    }
  }
}

void AlarmArray::delete_alarm(uint8_t *data) {
  StaticJsonDocument<384> body;
  deserializeJson(body, (char *)data);
  String id = body["id"];
  delete_alarm(id);
  return;
}

void AlarmArray::edit_from_json(uint8_t *data){
  StaticJsonDocument<384> body;
  deserializeJson(body, (char *)data);
  String id = body["id"];
  for(int i = 0; i < total_alarms; i++) {
    if(alarms[i].get_id() == id) {
      int minute = int(body["minute"]);
      int hour = int(body["hour"]);
      alarms[i] = Alarm(id, minute, hour);
      sort_alarms();
      break;
    } else if (i == (total_alarms - 1)) {
      Serial.println("Edit: No alarm with that id found");
    }
  }
  print_alarms();
}