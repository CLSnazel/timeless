#ifndef ALARM_H
#define ALARM_H

//#include <Serial.h>
#include <Arduino.h>

class Alarm {
  private:
    String id;
    int minute;
    int hour;
    bool active;
    int snooze_repeat_times;
    int snooze_minutes;
    void printId();
    void printMinute();
    void printHour();
    void printActive();
    // int repeat_days;
    // int sound;
    // int volume;
  public: 
    Alarm(String id);
    Alarm(String id, int minute, int hour);
    Alarm(String id, int minute, int hour, bool active);
    Alarm(String id, int minute, int hour, bool active, int snooze_repeat_times, int snooze_minutes);
    void update_minute (int new_minute);
    void update_hour (int new_hour);
    void update_active (bool new_active);
    void update_snooze_repeat_times (int new_snooze_repeat);
    void update_snooze_minutes (int new_snooze_minutes);
    void print();
};

#endif
