#include "AlarmRoutes.h"

Alarm alarm_from_body(uint8_t *data, size_t len) {
  DynamicJsonDocument body(100);
  deserializeJson(body, (char *)data);
  String id = body["id"];
  Serial.println(id);
  return Alarm();
  // String id = alarm_string.lastIndexOf('id:')
}