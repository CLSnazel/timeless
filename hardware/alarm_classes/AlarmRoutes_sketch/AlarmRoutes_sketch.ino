#include "WiFi.h"
#include "ESPAsyncWebServer.h"
#include "Config.h"
#include "AlarmRoutes.h"
const char* ssid = wifi_name;
const char* password =  wifi_password;
 
// AsyncWebServer server(80);
// AlarmServer Server = AlarmServer();
AlarmServer Server;
 
void setup() {
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println(WiFi.localIP());
  Server.init_routes();
  Server.server.begin();
}
 
void loop() {}
