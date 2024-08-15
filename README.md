> [!NOTE]
> **Repo contents:** Has backend and frontend.<br>
> **Purpose of repo:** To deploy frontend and backend for this module.<br>
> **Tasks in module:** To implement backend.<br>

# Module: QKart Backend
## Overview of Module
#### QKart

QKart is an E-commerce application offering a variety of products for customers to choose from.

During the course of this project,

- Built the complete set of REST APIs for an E-commerce application following the best practices
- Followed a layered approach for easy maintenance
- Used MongoDB NoSQL database for data storage
- Implemented multiple authentication schemes
- Wrote unit and integration tests to test the implementation

## My Tasks

1. Implementing REST APIs for tasks including
   - Creating user accounts and access tokens for registering new users
   - Authenticating users to allow log in
   - Adding products to users cart
   - Reading and updating user’s shipping address
   - Checking out products in user’s cart
2. Persisting user and products data in a database

## Deployment URL

- Backend (Render) - https://qkart-backend-2-jlz8.onrender.com/
- Frontend (Netlify) - https://66bc45a6a3de7800084c5338--qkart-node-6154.netlify.app/

##  Milestones

### 1. **Set Up Application and Implement the First API**

- **Scope of Work:**
  - Implemented the `GET /v1/users` API to fetch user data.
  - Followed a **layered approach** to separate concerns in the request-response cycle for better maintainability.
  - Used **Mongoose ODM** to interact with MongoDB and fetch user data.
  - Validated client requests using **JOI schemas**.
  - Leveraged **middlewares** to reduce code duplication and enhance reusability.
- **Skills Used:**
  - Node.js, Express.js,MongoDB,Mongoose ODM,JOI Validation

<br>
<div align="center">
<img src="https://directus.crio.do/assets/995c6746-976b-4dbf-a3db-e7de6af3162d?" width="80%" alt="Request-response cycle in QKart (Endpoint: /v1/users)" align="centre">
<p>Request-response cycle in QKart (Endpoint: /v1/users)</p>
</div>

### 2. **Secure API Endpoints and Implement Register/Login APIs**

- **Scope of Work:**
  - Implemented logic to generate short-lived **JWT tokens** for session management.
  - Secured the `GET /v1/users` endpoint using **token authentication** with **Passport.js**.
  - Created POST APIs for user **registration** and **login**.
  - Integrated **password authentication** with hashing to facilitate the secure login/registration flow.
- **Skills Used:**
  - REST APIs, JWT Token Authentication, Password Authentication, Hashing (for password security)

<br>
<div align="center">
<img src="https://directus.crio.do/assets/32671ec9-8074-4f0e-b45c-3cf951bc48f7?" width="50%" alt="JWT Token authentication flow for QKart APIs" align="centre">
<p>JWT Token authentication flow for QKart APIs</p>
</div>

### 3. **Implement APIs Related to Shopping Cart**

- **Scope of Work:**
  - Created `GET`, `POST`, and `PUT` API endpoints for managing a user’s shopping cart.
  - Enhanced the `GET /v1/users` endpoint to support **filtered API queries** for user addresses via query parameters.
- **Skills Used:**
  - REST APIs,Filtered API Queries

### 4. **Complete the Checkout Logic Using TDD**

- **Scope of Work:**
  - Added **Jest-based assertions** to test the checkout logic and ensure compliance with the provided requirements.
  - Followed a **Test-driven development (TDD)** approach to implement the checkout functionality.
  - Wrote **integration tests** to detect and resolve bugs during the checkout integration.
- **Skills Used:**
  - Test-driven Development (TDD), Unit Testing, Integration Testing, Jest Framework

### 5. **Deploy the QKart Backend Server**

- **Scope of Work:**
  - Set up a **MongoDB Atlas** instance and uploaded product data to the cloud database.
  - Deployed the QKart **Node.js backend** to **Render** for hosting.
  - Deployed the QKart **React frontend** to **Netlify** and configured it to interact with the deployed Node.js backend.
- **Skills Used:**
  - MongoDB Atlas, Cloud Deployment, Render, Netlify
