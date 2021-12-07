const router = require('express').Router()

const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

// TODO: checkId middleware
router.get('/:id', async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    res.json(account)
  } catch (err) {
    next(err)
  }
})

// TODO: checkAccount middleware
router.post('/', async (req, res, next) => {
  try {
    const newAccount = await Accounts.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

// TODO: checkId and checkAccount middleware
router.put('/:id', async (req, res, next) => {
  try {
    const updatedAccount = await Accounts.updateById(req.params.id, req.body)
    res.status(201).json(updatedAccount)
  } catch (err) {
    next(err)
  }
})

// TODO: checkId middleware
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedAccount = await Accounts.deleteById(req.params.id)
    res.json(deletedAccount)
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
