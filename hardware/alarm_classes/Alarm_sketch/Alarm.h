#ifndef ALARM_H
#define ALARM_H
#include <string>

class Alarm {
  private:
    string id;
    int minute;
    int hour;
    bool active;
    int snooze_repeat_times;
    int snooze_minutes;
    // int repeat_days;
    // int sound;
    // int volume;

};

#endif
