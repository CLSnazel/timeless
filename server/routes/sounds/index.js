const soundRoutes = async (fastify) => {
  fastify.get('/sounds/public', async (req, reply) => {
    reply.send({
      timeless: 'alarm'
    })
  })
  fastify.get('/sound/:id', async (req, reply) => {
    const { params: { id } } = req
    reply.send({ id })
  })
}

module.exports = soundRoutes
