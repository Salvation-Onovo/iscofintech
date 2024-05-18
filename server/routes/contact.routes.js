const { contactUs, getContacts } = require('../controllers/contactController')
const router = require('express').Router()

router.post('/', contactUs)
router.get('/', getContacts)

module.exports = router;