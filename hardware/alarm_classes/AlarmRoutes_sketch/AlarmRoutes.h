
#ifndef ALARM_ROUTES_H
#define ALARM_ROUTES_H

#include "Alarm.h"
#include "AlarmArray.h"
#include "ESPAsyncWebServer.h"
#include <Arduino.h>
#include "ArduinoJson.h"

Alarm alarm_from_body(uint8_t *data, size_t len);


class AlarmServer{
  private:
    void edit_alarm();
    void post_alarm();
    void delete_alarm();
    void not_found();
  public:
    AlarmServer();
    void init_routes();
    AsyncWebServer server = AsyncWebServer(80);
};

#endif