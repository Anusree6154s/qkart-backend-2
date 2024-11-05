<div align="center">
  <img src="https://github.com/user-attachments/assets/fa08e516-e0d6-4ff2-836b-06da3682465a" width="150"/>
    <h1 id="title">QKart Backend</h1>
    <p><strong>Backend for QKart - An E-commerce application</strong></p>
    <p>
      <a href="https://qkart-backend-2-jlz8.onrender.com/">View QKart Backend</a> •
      <a href="https://66bc45a6a3de7800084c5338--qkart-node-6154.netlify.app/">View QKart Frontend</a> •
      <a href="https://qkart-backend-2-jlz8.onrender.com/v1/swagger/docs">View API Documentation</a>
    </p>
    <img src="https://github.com/user-attachments/assets/f945686a-d945-462a-ad90-87985d19f40b" width="700"/>
</div>


## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Breakdown](#project-breakdown)

## Project Overview

<p id="description">QKart is an E-commerce application providing a wide range of products for users. This project focuses on the backend development, implementing robust REST APIs and ensuring secure user interactions.</p>

### Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Passport.js
- JOI Validation
- Jest Framework

### Features

- User registration and authentication via JWT.
- Secure API endpoints with token-based authentication.
- Management of user shopping carts (add, update, remove products).
- Checkout process with integration tests to ensure functionality.
- Comprehensive API documentation for developers.

## Setup Instructions

- ### Backend

  - #### Installation

    ```bash
    # clone repo
    git clone https://github.com/Anusree6154s/qkart-backend-2
    cd qkart-backend-2

    # install dependencies
    npm install
    ```

  - #### Set Up Environment Variables in server

    Create a .env file in the root directory and add the following configurations:

    ```
    JWT_ACCESS_EXPIRATION_MINUTES = your_jwt_exp_minutes
    JWT_REFRESH_EXPIRATION_DAYS = your_jwt_exp_days
    JWT_SECRET = your_jwt_secret
    MONGODB_URL = your_mongodb_uri
    NODE_ENV = development
    PORT = your_desired_port_other_than_8081 # PORT 8081 is client port
    ```

  - #### Running the Server
    ```bash
    npm start
    ```

- ### Frontend
  - #### Running the Client
    For the frontend, navigate to the frontend directory and run:
    ```bash
    cd ../frontend
    npm install
    npm start
    ```

## Project Breakdown

### Project Structure for backend

```
qkart-backend/
│
└── src/
    ├── api-doc/
    │   ├── docs.html
    |   ├── logo.png
    |   └── swagger.js
    ├── config/
    │   ├── config.js
    |   ├── passport.js
    |   └── tokens.js
    ├── controllers/
    │   ├── auth.controller.js
    |   ├── cart.controller.js
    │   ├── index.js
    |   ├── product.controller.js
    |   └── user.controller.js
    ├── middlewares/
    │   ├── auth.js
    |   ├── error.js
    |   └── validate.js
    ├── models/
    |   ├── cart.model.js
    │   ├── index.js
    |   ├── product.model.js
    |   └── user.model.js
    ├── routes/
    |   └── v1/
    |      └── auth.route.js
    |      ├── cart.route.js
    |      ├── index.js
    |      ├── product.route.js
    |      ├── swagger.route.js
    |      └── user.route.js
    ├── services/
    │   ├── auth.service.js
    |   ├── cart.service.js
    |   ├── index.js
    │   ├── product.service.js
    |   ├── token.service.js
    |   └── user.service.js
    ├── utils/
    │   ├── ApiError.js
    |   ├── catchAsync.js
    |   └── pick.js
    ├── validations/
    │   ├── auth.validation.js
    |   ├── cart.validation.js
    |   ├── custom.validation.js
    │   ├── index.js
    |   ├── product.validation.js
    |   └── user.validation.js
    ├── app.js
    └── index.js
```

### Technical Architecture

- #### Components

  - **Backend**:
    - **Node.js & Express.js**: For building a robust REST API, chosen for their non-blocking architecture and scalability, making it ideal for handling multiple requests simultaneously.
  - **Database**:
    - **MongoDB & Mongoose**: Used for flexible data storage and easy data manipulation.

- #### Design Pattern

  - **Layered Architecture**: This approach helps in separating concerns, making the code more maintainable and scalable.

    <div align="center">
    <img src="https://directus.crio.do/assets/995c6746-976b-4dbf-a3db-e7de6af3162d?" width="700"/>
    <h5> QKart Layered Architecture</h5>
    </div>

- #### Deployment Architecture

  - **Hosting**: The application is deployed on **Render** for ease of use and automatic deployments.
  - **Server**: Node.js server for handling requests.

- #### Security

  - **Authentication**: JWT (JSON Web Tokens) for secure user authentication.

    <div align="center">
    <img src="https://directus.crio.do/assets/32671ec9-8074-4f0e-b45c-3cf951bc48f7?" width="700"/>
    <h5> JWT Token authentication flow for QKart APIs</h5>
    </div>
  

### Features Implemented

- **User Registration**: Allows new users to create an account.
- **User Authentication**: Secure login process using JWT tokens.
- **Shopping Cart Management**: APIs for adding, updating, and removing items from the cart.
- **Checkout Process**: Finalizes purchases and handles payment logic.

### Potential Improvements

- [ ] Wishlist functionality for users.
- [ ] User reviews and ratings for products.
- [ ] Admin dashboard for managing products and users.
- [ ] Enhanced error handling and logging mechanisms.

<p align="center"> 
 <img width="0" id="image" alt="qkart-backend-2-demo-gif" src="https://github.com/user-attachments/assets/68b07401-b2e6-4ebe-b2bc-ad1ce996c957" >
</p>
