const Book = require('../models/Book');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Add new book
exports.addBook = async (req, res) => {
  const { name, author } = req.body;
  try {
    const newBook = new Book({ name, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove book
exports.removeBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    await Book.findByIdAndDelete(bookId);
    res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Issue book
exports.issueBook = async (req, res) => {
  const { userId, bookId, dueDate } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book.availabilityStatus) {
      return res.status(400).json({ message: 'Book not available' });
    }
    const transaction = new Transaction({ user: userId, book: bookId, dueDate, transactionType: 'borrowed' });
    await transaction.save();
    book.availabilityStatus = false;
    await book.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Return book
exports.returnBook = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const transaction = new Transaction({ user: userId, book: bookId, transactionType: 'returned' });
    await transaction.save();
    const book = await Book.findById(bookId);
    book.availabilityStatus = true;
    await book.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
