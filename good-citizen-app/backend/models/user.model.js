const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
Schema for User
Username: string
*/

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;