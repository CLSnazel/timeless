const { camelCase, snakeCase } = require('lodash')
const alarmRoutes = async (fastify) => {
  const { dbQuery } = fastify
  fastify.get('/alarm/all', async (req, reply) => {
    const { rows } = await dbQuery.getAllAlarms()
    const sortedAlarms = []
    for (const row of rows) {
      const { active, device_ip, email, friday, monday, name, password, is_public, saturday, silence_after, snooze_length, snooze_repeat_times, sound_id, source, sunday, thursday, time, tuesday, user_id, username, wednesday } = row
    
      const alarm = {
        active,
        silenceAfter: silence_after,
        snoozeLength: snooze_length,
        snoozeRepeatTimes: snooze_repeat_times,
        time
      }
      const daysActive = [
        { day: 'Monday', active: monday },
        { day: 'Tuesday', active: tuesday },
        { day: 'Wednesday', active: wednesday },
        { day: 'Thursday', active: thursday },
        { day: 'Friday', active: friday },
        { day: 'Saturday', active: saturday },
        { day: 'Sunday', active: sunday },
      ]
      const sound = { id: sound_id, name, source, isPublic: is_public }
      const user = { id: user_id, username, email, password, deviceIp: device_ip }
      sortedAlarms.push({ alarm, daysActive, sound, user })
    }
    reply.send(sortedAlarms)
  })

  fastify.post('/alarm/new', async (req, reply) => {
    const { body } = req
    const { rows } = await dbQuery.postNewAlarm(body)
    reply.send(rows)
    // HTTPie: http POST :8001/alarm/new name='bell' userId:=4 time='10:00' saturday=true sunday=true
  })

  fastify.put('/alarm/edit/:id', async (req, reply) => {
    const { params: { id }, body } = req
    const alarm = {}
    const { rows: getAlarmQuery } = await dbQuery.getAlarm(id)
    const original = getAlarmQuery[0]

    // If a new sound name is provided, change the sound id of the original
    if (body.name) {
      const { rows } = await dbQuery.addSound(id, body)
      original.sound_id = rows[0].id
    }
    
    for (const key in original) {
      body[camelCase(key)]
      ? alarm[camelCase(key)] = body[camelCase(key)]
      : alarm[camelCase(key)] = original[key]
    }

    const { rows } = await dbQuery.editAlarm(id, alarm)
    reply.send(rows)
  })

  fastify.delete('/alarm/delete/:id', async (req, reply) => {
    const { params: { id } } = req
    const { rows } = await dbQuery.deleteAlarm(id)
    reply.send(rows)
  })

  fastify.get('/alarm/:id', async (req, reply) => {
    const { params: { id } } = req
    const { rows } = await dbQuery.getAlarm(id)
    const { active, device_ip, email, friday, monday, name, password, is_public, saturday, silence_after, snooze_length, snooze_repeat_times, sound_id, source, sunday, thursday, time, tuesday, user_id, username, wednesday } = rows[0]
    
    const alarm = {
      active,
      silenceAfter: silence_after,
      snoozeLength: snooze_length,
      snoozeRepeatTimes: snooze_repeat_times,
      time
    }
    const daysActive = [
      { day: 'Monday', active: monday },
      { day: 'Tuesday', active: tuesday },
      { day: 'Wednesday', active: wednesday },
      { day: 'Thursday', active: thursday },
      { day: 'Friday', active: friday },
      { day: 'Saturday', active: saturday },
      { day: 'Sunday', active: sunday },
    ]
    const sound = { id: sound_id, name, source, isPublic: is_public }
    const user = { id: user_id, username, email, password, deviceIp: device_ip }
    
    reply.send({ alarm, daysActive, sound, user })
  })
}

module.exports = alarmRoutes
