const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
	description: {type: String, required: true},
	duration: {type: Number, required: true},
	date: {type: String}
});

const userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	log: [exerciseSchema]
});

/* Model */
module.exports = mongoose.model("User", userSchema);