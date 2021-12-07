const router = require('express').Router()

const Accounts = require('./accounts-model')

router.get('/', (req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', (req, res, next) => {
  try {
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
