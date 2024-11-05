const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const { createUser } = require("./services/user.service");

let server;

// Enable Mongoose debugging to log all queries
// mongoose.set('debug', function (collectionName, methodName, ...methodArgs) {
//   console.log('collectionName:', collectionName)
//   console.log('methodName:', methodName)
//   console.log('methodArgs:', methodArgs)
// });
console.log(config.mongoose.url) 

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('MongoDB connected');
  app.listen(config.port, () => {
    console.log(`Server connect to port ${config.port}`);
  });
}).catch(err => {
  console.error('Error:', err);
});
;
