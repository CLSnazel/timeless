#ifndef ALARM_ARRAY_H
#define ALARM_ARRAY_H

#include "Alarm.h"

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
    void delete_alarm(String id);
    void edit_alarm();
    void snooze_alarm();
    void stop_alarm();
};

#endif
