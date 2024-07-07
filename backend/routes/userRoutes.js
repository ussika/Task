const express = require('express');
const { registerUser, getUserTransactions } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/transactions/:userId', getUserTransactions);

module.exports = router;
