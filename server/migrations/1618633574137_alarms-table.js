/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('alarms', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
      notNull: true
    },
    user_id: {
      type: 'INTEGER',
      references: 'users(id)',
      onDelete: 'CASCADE'
    },
    sound_id: {
      type: 'INTEGER',
      references: 'sounds(id)',
      onDelete: 'CASCADE'
    },
    active: {
      type: 'BOOLEAN',
      default: true
    },
    snooze_repeat_times: {
      type: 'INTEGER'
    },
    snooze_length: {
      type: 'INTEGER'
    },
    silence_after: {
      type: 'INTEGER'
    },
    monday: {
      type: 'BOOLEAN',
      default: false
    },
    tuesday: {
      type: 'BOOLEAN',
      default: false
    },
    wednesday: {
      type: 'BOOLEAN',
      default: false
    },
    thursday: {
      type: 'BOOLEAN',
      default: false
    },
    friday: {
      type: 'BOOLEAN',
      default: false
    },
    saturday: {
      type: 'BOOLEAN',
      default: false
    },
    sunday: {
      type: 'BOOLEAN',
      default: false
    }
  })
}

exports.down = pgm => {
  pgm.dropTable('alarms', {
    ifExists: true,
    cascade: true
  })
}
