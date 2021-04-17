/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('users', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
      notNull: true
    },
    username: {
      type: 'VARCHAR(256)',
      notNull: true
    },
    email: {
      type: 'VARCHAR(256)'
    },
    password: {
      type: 'VARCHAR(256)'
    },
    device_ip: {
      type: 'VARCHAR(256)'
    }
  })
}

exports.down = pgm => {
  pgm.dropTable('users', {
    ifExists: true,
    cascade: true
  })
}
