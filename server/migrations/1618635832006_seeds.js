/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
  INSERT INTO users (username) VALUES ('Alice');
  INSERT INTO users (username) VALUES ('Camron');
  INSERT INTO users (username) VALUES ('Chantal');
  INSERT INTO users (username) VALUES ('Meg');
  
  INSERT INTO sounds (name, is_public) VALUES ('bird', true);

  INSERT INTO alarms (time, user_id, sound_id, snooze_repeat_times, snooze_length, silence_after, monday, tuesday, wednesday) VALUES ('06:00', 1, 1, 3, 5, 10, true, true, true);
  INSERT INTO alarms (time, user_id, sound_id, snooze_repeat_times, snooze_length, silence_after) VALUES ('07:00', 2, 1, 3, 5, 10);
  INSERT INTO alarms (time, user_id, sound_id, snooze_repeat_times, snooze_length, silence_after, monday, tuesday, wednesday, thursday, friday) VALUES ('08:00', 3, 1, 3, 5, 10, true, true, true, true, true);
  INSERT INTO alarms (time, user_id, sound_id, snooze_repeat_times, snooze_length, silence_after, saturday, sunday) VALUES ('09:00', 4, 1, 3, 5, 10, true, true);

`)
}

exports.down = pgm => {
  pgm.sql(`
    DELETE FROM users;
    DELETE FROM sounds;
    DELETE FROM alarms;
  `)
}
