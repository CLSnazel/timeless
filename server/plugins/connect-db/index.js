const fastifySlonik = require('@autotelic/fastify-slonik')

fastifySlonik.autoConfig = {
  connectionString: process.env.DATABASE_URL
}

module.exports = fastifySlonik
