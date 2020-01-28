const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name at least 3 characters"], minlength: 3},
    type: {type: String, required: [true, "type at least 3 characters"], minlength: 3},
    desc: {type: String, required: [true, "description at least 3 characters"], minlength: 3},
    skills: [{type: String}],
    likes: {type: Number, default:0}
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);