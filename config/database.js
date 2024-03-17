const mongoose = require('mongoose');
require("dotenv").config();

const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch(err => {
        console.error('Error connecting to DB');
        console.log(err);
        process.exit(1);
    });
}

module.exports = connectWithDB;
