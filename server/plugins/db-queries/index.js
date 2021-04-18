const fastifyPlugin = require('fastify-plugin')

async function databaseQueries (fastify) {
  const { sql, slonik } = fastify

  fastify.decorate('dbQuery', {
    getAllUsers: async () => {
      return slonik.query(sql`
        SELECT *
        FROM users;
      `)
    },
    getUserAlarms: async (id) => {
      return slonik.query(sql`
        SELECT *
        FROM alarms
        WHERE user_id=${id};
      `)
    },
    getAllAlarms: async () => {
      return slonik.query(sql`
        SELECT *
        FROM alarms
        INNER JOIN sounds
        ON (alarms.sound_id = sounds.id)
        INNER JOIN users
        ON (alarms.user_id = users.id);
      `)
    },
    getAlarm: async (id) => {
      return slonik.query(sql`
        SELECT *
        FROM alarms
        INNER JOIN sounds
        ON (alarms.sound_id = sounds.id)
        INNER JOIN users
        ON (alarms.user_id = users.id)
        WHERE alarms.id=${id};
      `)
    },
    getAllSounds: async () => {
      return slonik.query(sql`
        SELECT *
        FROM sounds;
      `)
    },
    getAllPublicSounds: async () => {
      return slonik.query(sql`
        SELECT *
        FROM sounds
        WHERE is_public=true;
      `)
    },
    postNewAlarmWithSound: async (alarm) => {
      const {
        name,
        source = null,
        isPublic,
        userId,
        time,
        active = true,
        snoozeRepeatTime = 0,
        snoozeLength = 0,
        silenceAfter = 0,
        monday = false,
        tuesday = false,
        wednesday = false,
        thursday = false,
        friday = false,
        saturday = false,
        sunday = false
      } = alarm

      return slonik.transaction(sql`
        WITH sound AS (
          INSERT INTO sounds (name, source, is_public)
          VALUES (${name}, ${source}, ${isPublic})
          RETURNING *
        )
        INSERT INTO alarms (user_id, sound_id, time, active, snooze_repeat_times, snooze_length, silence_after, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
        SELECT ${userId}, sound.id, ${time}, ${active}, ${snoozeRepeatTime}, ${snoozeLength}, ${silenceAfter}, ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}
        FROM sound
        RETURNING *;
      `)
    },
    postNewAlarm: async (alarm) => {
      const {
        userId,
        soundId,
        time,
        active = true,
        snoozeRepeatTimes = 0,
        snoozeLength = 0,
        silenceAfter = 0,
        monday = false,
        tuesday = false,
        wednesday = false,
        thursday = false,
        friday = false,
        saturday = false,
        sunday = false
      } = alarm

      return slonik.transaction(sql`
        INSERT INTO alarms (user_id, sound_id, time, active, snooze_repeat_times, snooze_length, silence_after, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
        VALUES (${userId}, ${soundId}, ${time}, ${active}, ${snoozeRepeatTimes}, ${snoozeLength}, ${silenceAfter}, ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday})
        RETURNING *;
      `)
    },
    deleteAlarm: async (id) => {
      return slonik.transaction(sql`
        DELETE FROM alarms
        WHERE id=${id}
        RETURNING *;
      `)
    },
    editAlarm: async (id, alarm) => {
      const {
        time,
        active,
        soundId,
        snoozeRepeatTimes,
        snoozeLength,
        silenceAfter,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      } = alarm

      return slonik.transaction(sql`
        UPDATE alarms
        SET
          time=${time},
          active=${active},
          sound_id=${soundId},
          snooze_repeat_times=${snoozeRepeatTimes},    
          snooze_length=${snoozeLength},    
          silence_after=${silenceAfter},    
          monday=${monday},    
          tuesday=${tuesday},    
          wednesday=${wednesday},    
          thursday=${thursday},    
          friday=${friday},    
          saturday=${saturday},    
          sunday=${sunday}    
        WHERE id=${id}
        RETURNING *;
      `)
    },
    addSound: async (id, sound) => {
      const {
        name,
        source = null,
        isPublic = false
      } = sound

      return slonik.transaction(sql`
        INSERT INTO sounds (name, source, is_public)
        VALUES (${name}, ${source}, ${isPublic})
        RETURNING *;
      `)
    }
  })
}

module.exports = fastifyPlugin(databaseQueries, {
  name: 'database-queries',
  decorators: {
    fastify: ['slonik', 'sql']
  },
  dependencies: [
    'fastify-slonik'
  ]
})
