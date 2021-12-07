const db = require('../../data/db-config')

const getAll = async () => {
  return await db('accounts').select('id', 'name', 'budget')
}

const getById = async (id) => {
  return await db('accounts').select('id', 'name', 'budget').where('id', id).first()
}

const create = async (account) => {
  const id = await db('accounts').insert(account)
  return await getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').update(account).where('id', id)
  return await getById(id)
}

const deleteById = async (id) => {
  await db('accounts').delete().where('id', id)
  return id
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
