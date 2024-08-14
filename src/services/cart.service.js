const httpStatus = require("http-status");
const { Cart, Product, User } = require("../models");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");

/**
 * Fetches cart for a user
 * - Fetch user's cart from Mongo
 * - If cart doesn't exist, throw ApiError
 * --- status code  - 404 NOT FOUND
 * --- message - "User does not have a cart"
 *
 * @param {User} user
 * @returns {Promise<Cart>}
 * @throws {ApiError}
 */
const getCartByUser = async (user) => {
  try {
    // Fetch user's cart from MongoDB
    let cart = await Cart.findOne({ email: user.email });

    // If cart doesn't exist, throw ApiError
    if (!cart)
      throw new ApiError(httpStatus.NOT_FOUND, "User does not have a cart");

    // Return the cart if found
    return cart;
  } catch (error) {
    throw new ApiError(
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error.message || httpStatus[500]
    );
  }
};

/**
 * Adds a new product to cart
 * - Get user's cart object using "Cart" model's findOne() method
 * --- If it doesn't exist, create one
 * --- If cart creation fails, throw ApiError with "500 Internal Server Error" status code
 *
 * - If product to add already in user's cart, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "Product already in cart. Use the cart sidebar to update or remove product from cart"
 *
 * - If product to add not in "products" collection in MongoDB, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "Product doesn't exist in database"
 *
 * - Otherwise, add product to user's cart
 *
 *
 *
 * @param {User} user
 * @param {string} productId
 * @param {number} quantity
 * @returns {Promise<Cart>}
 * @throws {ApiError}
 */
const addProductToCart = async (user, productId, quantity) => {
  try {
    // Get or create cart
    let cart = await Cart.findOne({ email: user.email });
    if (!cart) cart = await Cart.create({ email: user.email, cartItems: [] });

    // Check if product is already in the cart
    const productExistsInCart = cart.cartItems.some(
      (item) => item.product._id.toString() === productId
    );
    if (productExistsInCart) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Product already in cart. Use the cart sidebar to update or remove product from cart"
      );
    }

    // Check if product exists in the database
    let product = await Product.findById(productId);
    if (!product)
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Product doesn't exist in database"
      );

    // Add product to cart
    cart.cartItems.push({ product, quantity });
    await cart.save();

    return cart;
  } catch (error) {
    throw new ApiError(
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error.message || httpStatus[500]
    );
  }
};

/**
 * Updates the quantity of an already existing product in cart
 * - Get user's cart object using "Cart" model's findOne() method
 * - If cart doesn't exist, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "User does not have a cart. Use POST to create cart and add a product"
 *
 * - If product to add not in "products" collection in MongoDB, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "Product doesn't exist in database"
 *
 * - If product to update not in user's cart, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "Product not in cart"
 *
 * - Otherwise, update the product's quantity in user's cart to the new quantity provided and return the cart object
 *
 *
 * @param {User} user
 * @param {string} productId
 * @param {number} quantity
 * @returns {Promise<Cart>}
 * @throws {ApiError}
 */
const updateProductInCart = async (user, productId, quantity) => {
  try {
    // Get user's cart object
    let cart = await Cart.findOne({ email: user.email });
    if (!cart)
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "User does not have a cart. Use POST to create cart and add a product"
      );

    // Check if product exists in the database
    let product = await Product.findById(productId);
    if (!product)
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Product doesn't exist in database"
      );

    // Check if product is already in the cart
    const productIndex = cart.cartItems.findIndex(
      (item) => item.product._id.toString() === productId
    );
    if (productIndex == -1)
      throw new ApiError(httpStatus.BAD_REQUEST, "Product not in cart");

    // Update the product's quantity in user's cart
    cart.cartItems[productIndex].quantity = quantity;

    await cart.save();

    return cart;
  } catch (error) {
    throw new ApiError(
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error.message || httpStatus[500]
    );
  }
};

/**
 * Deletes an already existing product in cart
 * - If cart doesn't exist for user, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "User does not have a cart"
 *
 * - If product to update not in user's cart, throw ApiError with
 * --- status code  - 400 BAD REQUEST
 * --- message - "Product not in cart"
 *
 * Otherwise, remove the product from user's cart
 *
 *
 * @param {User} user
 * @param {string} productId
 * @throws {ApiError}
 */
const deleteProductFromCart = async (user, productId) => {
  try {
    // Get user's cart object
    let cart = await Cart.findOne({ email: user.email });
    if (!cart)
      throw new ApiError(httpStatus.BAD_REQUEST, "User does not have a cart");

    // Check if product is already in the cart
    const productIndex = cart.cartItems.findIndex(
      (item) => item.product._id.toString() === productId
    );
    if (productIndex == -1)
      throw new ApiError(httpStatus.BAD_REQUEST, "Product not in cart");

    // Remove the product from user's cart
    cart.cartItems.splice(productIndex, 1);
    await cart.save();
  } catch (error) {
    throw new ApiError(
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error.message || httpStatus[500]
    );
  }
};

// TODO: CRIO_TASK_MODULE_TEST - Implement checkout function
/**
 * Checkout a users cart.
 * On success, users cart must have no products.
 *
 * @param {User} user
 * @returns {Promise}
 * @throws {ApiError} when cart is invalid
 */
const checkout = async (user) => {
  try {
    // should throw 404 error if cart is not present
    let cart = await Cart.findOne({ email: user.email });
    if (!cart)
      throw new ApiError(httpStatus.NOT_FOUND, "User does not have a cart");

    // should throw 400 error if user's cart doesn't have any product
    if (cart.cartItems.length == 0)
      throw new ApiError(httpStatus.BAD_REQUEST, "Product not in cart");

    //  should throw 400 error if address is not set
    if (!await user.hasSetNonDefaultAddress()) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "User does not have an address"
      );
    }

    // should throw 400 error if wallet balance is insufficient
    const totalPrice = cart.cartItems.reduce(
      (acc, curr) => curr.product.cost * curr.quantity + acc,
      0
    );
    if (totalPrice > user.walletMoney)
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "User wallet balance is insufficient"
      );

    // should update user balance and empty the cart on success
    user.walletMoney -= totalPrice;
    await user.save();
    cart.cartItems = [];
    await cart.save();
  } catch (error) {
    throw new ApiError(
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error.message || httpStatus[500]
    );
  }
};

module.exports = {
  getCartByUser,
  addProductToCart,
  updateProductInCart,
  deleteProductFromCart,
  checkout,
};
