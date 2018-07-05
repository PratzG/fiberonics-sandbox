const DeveloperModel = require('./developer-model');
const ReadPreference = require('mongodb').ReadPreference;

const mongoose = require('./mongo');
mongoose.connect();

function get(req, res) {
    const query = DeveloperModel.find().read(ReadPreference.NEAREST);
    query.exec().then(developersData => res.json(developersData)).catch(err => {
        res.status(500).send(err)
    });   
}

module.exports = {
    get
};