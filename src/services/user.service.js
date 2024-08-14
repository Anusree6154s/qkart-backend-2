const { User } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

/**
 * Get User by id
 * - Fetch user object from Mongo using the "_id" field and return user object
 * @param {String} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  try {
    let docs = await User.findOne({ _id: id });
    return docs;
  } catch (error) {
    throw new Error(`Error retrieving user: ${error.message}`);
  }
};

/**
 * Get user by email
 * - Fetch user object from Mongo using the "email" field and return user object
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  try {
    let docs = await User.findOne({ email });
    return docs;
  } catch (error) {
    return error;
  }
};

/**
 * Create a user
 *  - check if the user with the email already exists using `User.isEmailTaken()` method
 *  - If so throw an error using the `ApiError` class. Pass two arguments to the constructor,
 *    1. “200 OK status code using `http-status` library
 *    2. An error message, “Email already taken”
 *  - Otherwise, create and return a new User object
 *
 * @param {Object} userBody
 * @returns {Promise<User>}
 * @throws {ApiError}
 *
 * userBody example:
 * {
 *  "name": "crio-users",
 *  "email": "crio-user@gmail.com",
 *  "password": "usersPasswordHashed"
 * }
 *
 * 200 status code on duplicate email - https://stackoverflow.com/a/53144807
 */
const createUser = async (body) => {
  //check for existing user
  let user = await User.isEmailTaken(body.email);
  if (user) {
    throw new ApiError(httpStatus.OK, "Email already taken");
  }

  let password = await bcrypt.hash(body.password, 8);
  //create a new user
  try {
    let docs = await User.create({ ...body, password });
    return docs;
  } catch (error) {
    throw new Error(`Error retrieving user: ${error.message}`);
  }
};

/**
 * Get subset of user's data by id
 * - Should fetch from Mongo only the email and address fields for the user apart from the id
 *
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserAddressById = async (id) => {
  try {
    let user = await User.findOne({ _id: id }, { address: 1, email: 1 });
    return user;
  } catch (error) {
    throw new Error(`Error retrieving user: ${error.message}`);
  }
};

/**
 * Set user's shipping address
 * @param {String} email
 * @returns {String}
 */
const setAddress = async (user, newAddress) => {
  user.address = newAddress;
  await user.save();

  return user.address;
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  getUserAddressById,
  setAddress,
};
