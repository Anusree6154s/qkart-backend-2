# Crio Module: QKart Backend

## Description

- **Problem**: E-commerce applications need robust and secure backends for user management and product transactions.
- **Solution**: Developed a comprehensive set of **REST APIs** for the QKart e-commerce application.

## Development Strategy

### Technology Stack

- **Back-end**: **Node.js**, **Express.js** for server-side logic.
- **Database**: **MongoDB** for flexible data storage.
- **Authentication**: **JWT** for secure user sessions; **Passport.js** for authentication management.
- **Testing**: **Jest** for unit and integration tests.

### Architecture

- **Layered Approach**: Separates concerns to enhance maintainability.
- **API Structure**:
  - **User Management**: Handles registration, login, and user data.
  - **Shopping Cart**: Manages product addition and user checkout.

### Features

- **User Registration & Authentication**: Secure account creation and login.
- **Shopping Cart Management**: Add/remove products, update quantities.
- **Checkout Process**: Facilitates transaction handling.

## Trade-offs & Improvements

- Prioritized security over performance; optimizations planned for future iterations.
- Basic tests implemented; focus on expanding testing coverage.

## Future Improvements

- Implement microservices for better scalability.
- Enhance API documentation and improve error handling.

## How to Run

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/qkart-backend.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   npm start
   ```

   Access the API at `http://localhost:YOUR_PORT/v1`.

## Deployment URL

- **Backend (Render)**: [QKart Backend](https://qkart-backend-2-jlz8.onrender.com/v1)
- **Frontend (Netlify)**: [QKart Frontend](https://66bc45a6a3de7800084c5338--qkart-node-6154.netlify.app/)
- **API Docs**: [QKart Backend API](https://qkart-backend-2-jlz8.onrender.com/v1/swagger/docs)

## Demo

- Preview homepage of API Docs
  
<p align="center"> 
 <img width="800" alt="qkart-backend-2-demo" src="https://github.com/user-attachments/assets/94bc465b-5ff8-4e73-8ce3-2b6c2d105f97">
 </p>
</p>
<br>
<br>

- Preview of all routes in API Docs
  
<p align="center"> 
 <img width="800" alt="qkart-backend-2-demo-gif" src="https://github.com/user-attachments/assets/f945686a-d945-462a-ad90-87985d19f40b">
 </p>

