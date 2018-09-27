const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')
const models = require('../models/')

const dependencies = {
  ...models
};
router.get('/', controller.index.bind(null, dependencies))
router.post('/', controller.create.bind(null, dependencies))
router.get('/:id', controller.show.bind(null, dependencies))
router.put('/:id', controller.update.bind(null, dependencies))
router.delete('/:id', controller.destroy.bind(null, dependencies))

module.exports = app => app.use('/user', router);