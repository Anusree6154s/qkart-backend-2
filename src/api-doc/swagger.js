require('dotenv').config()

const url_dev = `http://localhost:${process.env.PORT}`
const url_prod = `http://qkart-backend-2-jlz8.onrender.com`

const curr_url = url_prod

exports.spec = {
    "openapi": "3.0.0",
    "info": {
        "title": "QKart Backend API",
        "version": "1.0.0",
        "description": "API documentation for QKart Backend",
        "contact": {
            "name": "Email",
            "email": "anilkumaranusree113@gmail.com",
            "url": "https://github.com/Anusree6154s/qkart-backend-2"
        },
        "x-logo": {
            "url": `${curr_url}/v1/swagger/logo`,
            "altText": "qkart logo"
        }
    },
    "servers": [
        {
            "url": `${curr_url}/v1`
        }
    ],
    "tags": [
        {
            "name": "Auth Routes",
            "description": "Authentication related endpoints"
        },
        {
            "name": "Users Routes",
            "description": "User management endpoints"
        },
        {
            "name": "Products Routes",
            "description": "Product related endpoints"
        },
        {
            "name": "Cart Routes",
            "description": "Cart related endpoints"
        }
    ],
    "paths": {
        "/auth/register": {
            "post": {
                "tags": [
                    "Auth Routes"
                ],
                "summary": "Register a new user",
                "description": "This endpoint allows a new user to register by providing their name, email, and password.",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RegisterRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "User registered successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/RegisterResponse"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid input data",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/400"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/auth/login": {
            "post": {
                "tags": [
                    "Auth Routes"
                ],
                "summary": "Login a user",
                "description": "This endpoint allows a user to log in using their email and password.",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "User logged in successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/RegisterResponse"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Invalid email or password",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/400"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users/{userId}": {
            "get": {
                "tags": [
                    "Users Routes"
                ],
                "summary": "Fetch a user",
                "description": "This endpoint allows you to fetch a specified user by passing userId as a parameter.",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "ID of the user to fetch",
                        "schema": {
                            "type": "string",
                            "example": "67179c51372d8d1e70b3170f"
                        }
                    },
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Fetched user successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FetchUserResponse"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Authentication Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User Not Found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/404"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "tags": [
                    "Users Routes"
                ],
                "summary": "Set user address",
                "description": "This endpoint allows a user to set their address. The user must be authenticated and authorized to update their address.",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "ID of the user to update",
                        "schema": {
                            "type": "string",
                            "example": "67179c51372d8d1e70b3170f"
                        }
                    },
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "address": {
                                        "type": "string",
                                        "description": "New address for the user",
                                        "example": "123 Main St, Springfield, USA"
                                    }
                                },
                                "required": [
                                    "address"
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Address updated successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "address": {
                                                "type": "string",
                                                "description": "Updated address of the user",
                                                "example": "123 Main St, Springfield, USA"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Unauthorized",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/401"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Forbidden - User not authorized to update this address",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "message": {
                                                "type": "string",
                                                "example": "User not authorized to access this resource"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "User Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/404"
                                    }
                                }
                            }
                        },
                        "500": {
                            "description": "Server error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/500"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users/{userId}?q=address": {
            "get": {
                "tags": [
                    "Users Routes"
                ],
                "summary": "Fetch the address of a user.",
                "description": "This endpoint allows a user to fetch the address of a user using address query.",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "required": true,
                        "description": "ID of the user to fetch",
                        "schema": {
                            "type": "string",
                            "example": "67179c51372d8d1e70b3170f"
                        }
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "required": true,
                        "description": "A key called `address`",
                        "schema": {
                            "type": "string",
                            "example": "?q=address"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "User logged in successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FetchAddressResponse"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Authentication Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User Not Found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/404"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/products": {
            "get": {
                "tags": [
                    "Products Routes"
                ],
                "summary": "Get all products",
                "description": "Retrieve a list of all available products.",
                "responses": {
                    "200": {
                        "description": "A list of products",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Product"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/products/{productId}": {
            "get": {
                "tags": [
                    "Products Routes"
                ],
                "summary": "Get product by ID",
                "description": "Retrieve a product by its unique identifier.",
                "parameters": [
                    {
                        "name": "productId",
                        "in": "path",
                        "required": true,
                        "description": "ID of the product to fetch",
                        "schema": {
                            "type": "string",
                            "example": "61e1f3c4b0e95b3a1e3d1f2a"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Product details",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Product Not Found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/404"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/cart": {
            "get": {
                "tags": [
                    "Cart Routes"
                ],
                "summary": "Get user's cart",
                "description": "Retrieve the current cart for the logged-in user.",
                "parameters": [
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Cart retrieved successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Cart"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Authentication Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User does not have cart",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/404"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Cart Routes"
                ],
                "summary": "Add product to cart",
                "description": "Add a product to the user's cart.",
                "parameters": [
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AddProductToCartRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Product added to cart",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Cart"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid input data",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/404"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Authentication Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "tags": [
                    "Cart Routes"
                ],
                "summary": "Update product in cart",
                "description": "Update the quantity of a product in the user's cart, or remove it if the quantity is not provided.",
                "parameters": [
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/UpdateProductInCartRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Product updated in cart",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Cart"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid input data",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/400"
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/cart/checkout": {
            "put": {
                "tags": [
                    "Cart Routes"
                ],
                "summary": "Checkout",
                "description": "Checkout the current cart and place an order for the logged-in user.",
                "parameters": [
                    {
                        "name": "Authorization",
                        "in": "header",
                        "required": true,
                        "description": "Bearer token for authentication",
                        "schema": {
                            "type": "string",
                            "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
                        }
                    }
                ],
                "responses": {
                    "204": {
                        "description": "Checkout successful"
                    },
                    "401": {
                        "description": "Unauthorized",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/401"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Server error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/500"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "RegisterRequest": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The name of the user",
                        "example": "John Doe"
                    },
                    "email": {
                        "type": "string",
                        "description": "The email address of the user",
                        "format": "email",
                        "example": "john.doe@example.com"
                    },
                    "password": {
                        "type": "string",
                        "description": "The user's password. Must meet the following criteria:\n- At least 8 characters long.\n- Must contain at least one letter and one number.",
                        "example": "P@ssw0rd1!"
                    }
                },
                "required": [
                    "name",
                    "email",
                    "password"
                ]
            },
            "RegisterResponse": {
                "type": "object",
                "properties": {
                    "user": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string",
                                "description": "Unique id generated by database",
                                "example": "6717563fc24f8b7384bf4370"
                            },
                            "name": {
                                "type": "string",
                                "description": "The name of the user",
                                "example": "John Doe"
                            },
                            "email": {
                                "type": "string",
                                "description": "The email address of the user",
                                "format": "email",
                                "example": "john.doe@example.com"
                            },
                            "walletMoney": {
                                "type": "number",
                                "description": "Inital money in wallet",
                                "example": 500
                            }
                        }
                    },
                    "tokens": {
                        "type": "object",
                        "properties": {
                            "access": {
                                "type": "object",
                                "properties": {
                                    "token": {
                                        "type": "string",
                                        "description": "Access token for authentication",
                                        "example": "eyJhbGciOiJIUzI..."
                                    },
                                    "expires": {
                                        "type": "string",
                                        "format": "date-time",
                                        "description": "Expiration date for the token",
                                        "example": "2023-12-31T23:59:59Z"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "LoginRequest": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                        "description": "The email address of the user",
                        "format": "email",
                        "example": "john.doe@example.com"
                    },
                    "password": {
                        "type": "string",
                        "description": "The user's password. Must meet the following criteria:\n- At least 8 characters long.\n- Must contain at least one letter and one number.",
                        "example": "P@ssw0rd1!"
                    }
                },
                "required": [
                    "email",
                    "password"
                ]
            },
            "FetchUserResponse": {
                "type": "object",
                "properties": {
                    "walletMoney": {
                        "type": "number",
                        "description": "Wallet money of the user.",
                        "example": 500
                    },
                    "address": {
                        "type": "string",
                        "description": "Address of the user",
                        "example": "ADDRESS_NOT_SET"
                    },
                    "_id": {
                        "type": "string",
                        "description": "Unique ID of the user",
                        "example": "67179c51372d8d1e70b3170e"
                    },
                    "name": {
                        "type": "string",
                        "description": "Name of the user",
                        "example": "a"
                    },
                    "email": {
                        "type": "string",
                        "description": "Email of the user",
                        "format": "email",
                        "example": "b@gmail.com"
                    },
                    "password": {
                        "type": "string",
                        "description": "Hashed password of the user",
                        "example": "$2a$08$Wy50o.efk.b2XAPTuKe/He90nH1ojStJEWg1CUVMXyBC/1yf2wBCG"
                    },
                    "createdAt": {
                        "type": "string",
                        "format": "date-time",
                        "description": "The date and time the user was created",
                        "example": "2024-10-22T12:36:33.428Z"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time",
                        "description": "The date and time the user was last updated",
                        "example": "2024-10-22T12:36:33.428Z"
                    },
                    "__v": {
                        "type": "number",
                        "description": "Version key",
                        "example": 0
                    }
                }
            },
            "FetchAddressResponse": {
                "type": "object",
                "properties": {
                    "address": {
                        "type": "string",
                        "description": "Wallet money of the user.",
                        "example": "ADDRESS_NOT_SET"
                    }
                }
            },
            "Product": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string",
                        "description": "Unique identifier of the product",
                        "example": "6005913ffaa2bffe60466952"
                    },
                    "name": {
                        "type": "string",
                        "description": "Name of the product",
                        "example": "OnePlus 6"
                    },
                    "category": {
                        "type": "string",
                        "description": "Category of the product",
                        "example": "Phones"
                    },
                    "cost": {
                        "type": "number",
                        "description": "Cost of the product",
                        "example": 100
                    },
                    "rating": {
                        "type": "integer",
                        "description": "Rating of the product out of 5",
                        "example": 5
                    },
                    "image": {
                        "type": "string",
                        "format": "uri",
                        "description": "Image URL of the product",
                        "example": "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126"
                    }
                }
            },
            "Cart": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                        "description": "Email address of the user",
                        "example": "user@example.com"
                    },
                    "cartItems": {
                        "type": "array",
                        "description": "List of items in the cart",
                        "items": {
                            "type": "object",
                            "properties": {
                                "product": {
                                    "$ref": "#/components/schemas/Product",
                                    "description": "Details of the product in the cart"
                                },
                                "quantity": {
                                    "type": "integer",
                                    "description": "Quantity of the product in the cart",
                                    "example": 2
                                }
                            }
                        }
                    },
                    "paymentOption": {
                        "type": "string",
                        "description": "Payment option selected by the user",
                        "default": "credit_card",
                        "example": "credit_card"
                    }
                }
            },
            "AddProductToCartRequest": {
                "type": "object",
                "properties": {
                    "productId": {
                        "type": "string",
                        "description": "ID of the product to add to the cart",
                        "example": "61e1f3c4b0e95b3a1e3d1f2c"
                    },
                    "quantity": {
                        "type": "number",
                        "description": "Quantity of the product to add",
                        "example": 1
                    }
                },
                "required": [
                    "productId",
                    "quantity"
                ]
            },
            "UpdateProductInCartRequest": {
                "type": "object",
                "properties": {
                    "productId": {
                        "type": "string",
                        "description": "ID of the product to update in the cart",
                        "example": "61e1f3c4b0e95b3a1e3d1f2c"
                    },
                    "quantity": {
                        "type": "number",
                        "description": "Updated quantity of the product in the cart (if not provided, the product will be removed from the cart)",
                        "example": 3
                    }
                },
                "required": [
                    "productId"
                ]
            },
            "400": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "example": "Bad Request",
                        "description": "Description of the error"
                    },
                    "code": {
                        "type": "integer",
                        "example": 400,
                        "description": "HTTP error code"
                    }
                }
            },
            "401": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "example": "Please Authenticate",
                        "description": "Description of the error"
                    },
                    "code": {
                        "type": "integer",
                        "example": 401,
                        "description": "HTTP error code"
                    }
                }
            },
            "404": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "example": "Not Found",
                        "description": "Description of the error"
                    },
                    "code": {
                        "type": "integer",
                        "example": 404,
                        "description": "HTTP error code"
                    }
                }
            },
            "500": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "example": "Internal Server Error",
                        "description": "Description of the error"
                    },
                    "code": {
                        "type": "integer",
                        "example": 500,
                        "description": "HTTP error code"
                    }
                }
            }
        }
    }
}
