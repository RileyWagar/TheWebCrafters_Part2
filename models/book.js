const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, default: true },
    availableQuantity: { type: Number, required: true, min: 0 }, 
    description: { type: String }, 
    isbn: { type: String, unique: true },
});

module.exports = mongoose.model('Book', bookSchema);
