const soundRoutes = async (fastify) => {
  const { dbQuery } = fastify
  fastify.get('/sounds/all', async (req, reply) => {
    const { rows } = await dbQuery.getAllSounds()
    reply.send(rows)
  })
  fastify.get('/sounds/public', async (req, reply) => {
    const { rows } = await dbQuery.getAllPublicSounds()
    reply.send(rows)
  })
  fastify.get('/sound/:id', async (req, reply) => {
    const { params: { id } } = req
    reply.send({ id })
  })
}

module.exports = soundRoutes
