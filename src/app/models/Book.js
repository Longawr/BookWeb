const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
	name: String,
	price: { type: Number, default: 0, min: 0, },
	description: String,
	image: String,
});

module.exports = mongoose.model('Book', Book);