#ifndef ALARM_ARRAY_H
#define ALARM_ARRAY_H

#include "Alarm.h"
#include "ArduinoJson.h"

class AlarmArray {
  private:
    int max_alarms = 200;
    int total_alarms = 0;
    Alarm alarms[200];
    void sort_alarms();
  public:
    AlarmArray();
    // AlarmArray();
    bool is_full();
    void print_alarms();
    void insert_alarm(String id, int minute, int hour, bool active, int snooze_repeat_times, int snooze_minutes);
    void insert_from_json(uint8_t *data);
    void delete_alarm(String id);
    void delete_alarm(uint8_t *data);
    // void edit_alarm();
    void edit_from_json(uint8_t *data, size_t len);
    void snooze_alarm();
    void stop_alarm();
};

#endif
