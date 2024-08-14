const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const { createUser } = require("./services/user.service");

let server;

// Enable Mongoose debugging to log all queries
// mongoose.set('debug',function(collectionName, methodName, ...methodArgs) {
//   console.log('collectionName:', collectionName)
//   console.log('methodName:', methodName)
//   console.log('methodArgs:', methodArgs)
// });

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
// Connect to MongoDB
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Successfully connected to MongoDB");

    // Start the server after successful connection
    app.listen(config.port, () => {
      console.log(`Server connected to port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    // Optionally, exit the process if desired
    process.exit(1);
  });
