const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
Schema for Crime Instances
Latitude: float
Longitude: float
TimeStampe: automatically added
Description of the Crime
*/

const instanceSchema = new Schema({
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    description: {type: String, required: true},
}, {
    timestamps: true,
});

const Instance = mongoose.model('Instance', instanceSchema);

module.exports = Instance;