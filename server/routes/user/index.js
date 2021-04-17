const userRoutes = async (fastify) => {
  const { dbQuery } = fastify
  fastify.get('/alarms/:uid', async (req, reply) => {
    const { params: { uid } } = req
    const { rows } = await dbQuery.getUserAlarms(uid)
    reply.send(rows)
  })
  fastify.get('/users', async (req, reply) => {
    const { rows } = await dbQuery.getAllUsers()
    reply.send(rows)
  })
}

module.exports = userRoutes
