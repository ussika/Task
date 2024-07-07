const express = require('express');
const { addBook, removeBook, issueBook, returnBook } = require('../controllers/adminController');
const router = express.Router();

router.post('/addBook', addBook);
router.delete('/removeBook/:bookId', removeBook);
router.post('/issueBook', issueBook);
router.post('/returnBook', returnBook);

module.exports = router;
