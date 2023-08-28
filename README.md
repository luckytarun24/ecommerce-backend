# E-Commerce Backend API using Node.js

Welcome to the E-Commerce Backend API project! This project demonstrates the development of a RESTful API for an e-commerce platform using Node.js. The API provides endpoints for managing products, user authentication, shopping carts, orders, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Controllers](#controllers)
- [Routers](#routers)
- [Models](#models)
- [Utils](#utils)
- [Acknowledgments](#acknowledgments)

## Introduction

This project showcases the development of a backend API for an e-commerce platform. By exploring the codebase and understanding its structure, controllers, routers, and models, developers can learn about building robust and scalable backend systems using Node.js.

## Features

The project implements the following key features:

- User authentication and authorization using JWT
- CRUD operations for products, carts, orders, and users
- API endpoints for creating, updating, and deleting data
- Utilization of middleware for authentication and error handling

## Getting Started

### Prerequisites

- Basic understanding of JavaScript and Node.js
- Familiarity with RESTful API concepts

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/luckytarun24/ecommerce-backend.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Server:**

   ```bash
   npm start
   ```

   The API server will be accessible at `http://localhost:3000`.

## Project Structure

The project directory structure is organized as follows:

- `config.js`: Configuration settings and environment variables
- `defaultData.json`: Default data for seeding the database
- `index.js`: Entry point for the API server
- `server`: Server-related files
  - `app.js`: Express application configuration
  - `database.js`: Database connection setup
  - `seed.js`: Database seeding script
- `src`: Main source code directory
  - `controllers`: Request handlers for API endpoints
  - `modals`: Database models using Mongoose
  - `routers`: Express routers for routing requests
  - `utils`: Utility functions, including JWT and middleware
  - `index.js`: Entry point for the API server

## Controllers

The `controllers` directory contains request handlers for different API endpoints, organized by their respective entities:

- `auth`: Authentication-related controllers
- `cart`: Controllers for shopping cart management
- `order`: Controllers for order management
- `product`: Controllers for product management
- `users`: Controllers for user management

## Routers

The `routers` directory holds Express routers that define API routes for different entities:

- `auth.js`: Authentication and user-related routes
- `cart.js`: Routes for shopping cart operations
- `order.js`: Routes for order operations
- `product.js`: Routes for product operations
- `users.js`: Routes for user operations

## Models

The `modals` directory contains Mongoose schema definitions for different data entities:

- `address.js`: Address schema
- `cart.js`: Shopping cart schema
- `order.js`: Order schema
- `product.js`: Product schema
- `user.js`: User schema

## Utils

The `utils` directory holds utility functions used throughout the application:

- `bcryptHelpers.js`: Functions for working with bcrypt
- `jwt.js`: Functions for working with JSON Web Tokens
- `middleware.js`: Custom middleware for authentication and error handling

## Acknowledgments

This project is a practical example of building a RESTful API for an e-commerce platform using Node.js. It emphasizes best practices in backend development, API design, and data modeling.
