# timeless

### server
```sh
$ cd server
$ cp .envrc.example .envrc
$ npm i
$ docker-compose up -d
$ npm run migrate up
$ npm run dev
```

### client
```sh
$ cd client
$ cp .env.example .env
$ yarn install && yarn start
```

### hardware/alarm_classes:
These sketches run on ESP32 arduino boards.
To run the AlarmRoutes sketch, please copy Config example.cpp and fill in your wifi credentials:
```ssh
$ cp Config_example.cpp Config.cpp
```
Other libraries that are required:
- [ArduinoJson](https://arduinojson.org/)
- [ESP32AsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (for use of ESP32AsyncWebServer)