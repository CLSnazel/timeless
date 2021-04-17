const alarmRoutes = async (fastify) => {
  fastify.get('/alarm', async (req, reply) => {
    reply.send({
      alarm: 'timeless'
    })
  })
}

module.exports = alarmRoutes
