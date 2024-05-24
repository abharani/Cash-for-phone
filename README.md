# Product-Sales Management System

## Description
A web application for managing products and sales with user authentication. This system allows users to add products, view a list of products, create sales by selecting products, and view a list of sales records.

## Features
- User login for authentication.
- Ability to add new products to the product list.
- Display a list of existing products.
- Create a sale by selecting products from the list.
- Display a list of sales records.

## Technologies Used
- Backend: Node.js, Express.js, MongoDB
- Frontend: React.js

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running. You can use MongoDB Compass for a GUI.

API Endpoints
User Authentication
POST /api/users/register: Register a new user.
POST /api/users/login: Login a user and return a JWT token.
Products
POST /api/products: Add a new product.
GET /api/products: Fetch all products.
Sales
POST /api/sales: Create a new sale.
GET /api/sales: Fetch all sales.
Error Handling
Proper HTTP status codes are used for responses.
Input validation and error handling are implemented for user authentication, product details, and sales creation.
