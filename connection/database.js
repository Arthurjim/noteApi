require("dotenv").config();
const mongoose = require('mongoose');
(async () => {
  try {
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    const db = await mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
      mongooseOptions
    );
    console.log("Data base is connected to:", db.connection.name);
  } catch (err) {
    return console.log('Problemas con el servidor revisa si esta encendido')
  }
})();
module.exports = mongoose