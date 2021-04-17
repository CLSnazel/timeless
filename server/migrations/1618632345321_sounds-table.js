/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('sounds', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
      notNull: true
    },
    name: {
      type: 'VARCHAR(256)',
      notNull: true
    },
    source: {
      type: 'VARCHAR(256)'
    },
    is_public: {
      type: 'BOOLEAN',
      default: false
    }
  })
}

exports.down = pgm => {
  pgm.dropTable('sounds', {
    ifExists: true,
    cascade: true
  })
}
