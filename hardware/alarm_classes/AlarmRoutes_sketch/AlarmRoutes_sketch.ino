#include "WiFi.h"
#include "ESPAsyncWebServer.h"
#include "Config.h"
#include "AlarmRoutes.h"
const char* ssid = wifi_name;
const char* password =  wifi_password;
 
AsyncWebServer server(80);
 
void setup() {
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println(WiFi.localIP());
 
  server.on(
    "/post",
    HTTP_POST,
    [](AsyncWebServerRequest * request){},
    NULL,
    [](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
 
      // for (size_t i = 0; i < len; i++) {
      //   Serial.write(data[i]);
      // }
 
      // Serial.println();
      alarm_from_body(data, len);
      request->send(204);
  });
 
  server.begin();
}
 
void loop() {}
