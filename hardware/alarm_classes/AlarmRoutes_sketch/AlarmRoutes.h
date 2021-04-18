
#ifndef ALARM_ROUTES_H
#define ALARM_ROUTES_H

#include "Alarm.h"
#include "AlarmArray.h"
#include "ESPAsyncWebServer.h"
#include <Arduino.h>
#include "ArduinoJson.h"

Alarm alarm_from_body(uint8_t *data, size_t len);
// extern AlarmArray route_alarms = AlarmArray();
// extern AsyncWebServer  server(80);

#endif