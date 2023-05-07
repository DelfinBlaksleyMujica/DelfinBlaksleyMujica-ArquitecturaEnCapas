//Conexion a Mongoose
const mongoose = require("mongoose");

//Conexion a la info process.env
const { options } = require("./options");

//Loggers
const { logger } = require("../loggers/loggers");

const connectDB = async() => {
    try {
        await mongoose.connect( options.mongo.url , options.mongo.options );
        logger.info("Base de datos conectada!!");
    } catch (error) {
        logger.error(error.message);
    }
}

module.exports = { connectDB };