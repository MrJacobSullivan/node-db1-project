const Accounts = require('./accounts-model')

const checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body

  if (name === undefined || budget === undefined) {
    next({ status: 400, message: 'name and budget are required' })
  } else if (typeof name !== 'string') {
    next({ status: 400, message: 'name of account must be a string' })
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: 'name of account must be between 3 and 100' })
  } else if (typeof budget !== 'number') {
    next({ status: 400, message: 'budget of account must be a number' })
  } else if (budget < 0 || budget > 1_000_000) {
    next({ status: 400, message: 'budget of account is too large or too small' })
  } else {
    req.account = { name: name.trim(), budget }
    next()
  }
}

const checkAccountNameUnique = async (req, res, next) => {
  const accounts = await Accounts.getAll()
  const matchedAccount = accounts.find((account) => account.name === req.body.name.trim())

  if (matchedAccount) {
    next({ status: 400, message: 'that name is taken' })
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
