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
    int silence_after;
    bool is_snooze;

    // days to repeat 
    bool monday;
    bool tuesday;
    bool wednesday;
    bool thursday;
    bool friday;
    bool saturday;
    bool sunday;
    
    void print_id();
    void print_minute();
    void print_hour();
    void print_active();
    void print_snooze_repeat();
    void print_snooze_minutes();
    void print_repeat_days();
    
  public: 
    Alarm();
    Alarm(String id, int minute, int hour);
    Alarm(String id, int minute, int hour, bool active);
    Alarm(String id, int minute, int hour, bool active, int snooze_repeat_times, int snooze_minutes);
    // Alarm(String id, int minute, int hour, bool active, int snooze_repeat_times

    void update_minute (int new_minute);
    void update_hour (int new_hour);
    void update_active (bool new_active);
    void update_snooze_repeat_times (int new_snooze_repeat);
    void update_snooze_minutes (int new_snooze_minutes);

    void print();
    float get_alarm_float();
};

#endif
