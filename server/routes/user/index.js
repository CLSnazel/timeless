const userRoutes = async (fastify) => {
  fastify.get('/alarms/:uid', async (req, reply) => {
    const { params: { uid } } = req
    reply.send({ uid })
  })
}

module.exports = userRoutes
