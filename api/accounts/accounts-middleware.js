const Accounts = require('./accounts-model')

const checkAccountPayload = (req, res, next) => {
  if (!req.body.name || !req.body.budget) {
    next({ status: 400, message: '' })
  } else {
    req.account = { name: req.body.name.trim(), budget: req.body.budget }
    next()
  }
}

const checkAccountNameUnique = async (req, res, next) => {
  const accounts = await Accounts.getAll()
  const matchedAccount = accounts.find((account) => account.name === req.body.name)

  if (matchedAccount) {
    next({ status: 400, message: '' })
  } else {
    next()
  }
}

const checkAccountId = async (req, res, next) => {
  const account = await Accounts.getById(req.params.id)

  if (!account) {
    next({ status: 404, message: 'account not found' })
  } else {
    req.account = account
    next()
  }
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
}
