const User = require('../models/User');
const Transaction = require('../models/Transaction');

// User registration
exports.registerUser = async (req, res) => {
  const { username, name, email, contactNumber, password } = req.body;
  try {
    const user = new User({ username, name, email, contactNumber, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User transaction history
exports.getUserTransactions = async (req, res) => {
  const { userId } = req.params;
  try {
    const transactions = await Transaction.find({ user: userId }).populate('book');
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
