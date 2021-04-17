const alarmRoutes = async (fastify) => {
  fastify.get('/alarm', async (req, reply) => {
    reply.send({
      alarm: 'timeless'
    })
  })

  fastify.post('/alarm/new', async (req, reply) => {
    const { body } = req
    reply.send({ body })
  })

  fastify.put('/alarm/edit/:id', async (req, reply) => {
    const { params: { id } } = req
    reply.send({ id })
  })

  fastify.delete('/alarm/delete/:id', async (req, reply) => {
    const { params: { id } } = req
    reply.send({ id })
  })

  fastify.get('/alarm/:id', async (req, reply) => {
    const { params: { id } } = req
    reply.send({ id })
  })
}

module.exports = alarmRoutes
