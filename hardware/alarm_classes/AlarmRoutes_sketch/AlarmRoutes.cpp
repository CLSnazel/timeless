#include "AlarmRoutes.h"

// Alarm alarm_from_body(uint8_t *data, size_t len) {
//   StaticJsonDocument body<100>;
//   deserializeJson(body, (char *)data);
//   String id = body["id"];
//   Serial.println(id);
//   return Alarm();
// }
extern AlarmArray route_alarms = AlarmArray();

AlarmServer::AlarmServer() {
  // route_alarms = AlarmArray();
}

void AlarmServer::init_routes() {
  post_alarm();
  edit_alarm();
  delete_alarm();
}

void AlarmServer::post_alarm() {
  server.on(
    "/alarm/new",
    HTTP_POST,
    [](AsyncWebServerRequest * request){},
    NULL,
    [](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
      Serial.println("POST");
      route_alarms.insert_from_json(data);
      request->send(204);
    }
  );
}

void AlarmServer::edit_alarm() {
  server.on(
    "/alarm",
    HTTP_PUT,
    [](AsyncWebServerRequest * request){},
    NULL,
    [](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
      Serial.println("PUT");
      // alarm_from_body(data, len);
      request->send(204);
  });
}

void AlarmServer::delete_alarm() {
  server.on(
    "/alarm",
    HTTP_DELETE,
    [](AsyncWebServerRequest * request){},
    NULL,
    [](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
      Serial.println("Delete");
      route_alarms.delete_alarm(data);
      request->send(204);
  });
}