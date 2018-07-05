const mongoose = require('mongoose');
const env = require('./env/env-sandbox');

mongoose.Promise = global.Promise;

const mongouri = `mongodb://${env.dbname}.documents.azure.com:${env.port}/Sandbox1?ssl=true&replicaSet=globaldb`;

function connect() {
    //console.log(mongouri);
    const temp = mongoose.connect(mongouri,{
        auth:   {
            user: `${env.dbname}`,
            password: `${env.key}`
        }
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("Connected to DB");
    });
    return temp;
}

module.exports = {
    connect,
    mongoose
};