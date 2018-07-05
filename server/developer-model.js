const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dpSchema = new Schema ({
    id: {type: Number   , required: true, unique: true },
    name: String,
    ability: Number
});

const DeveloperModel = mongoose.model('DevelopersDoc', dpSchema);

module.exports = DeveloperModel;