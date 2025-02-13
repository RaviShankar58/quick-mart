# Quick Mart - E-commerce App

Quick Mart is a full-featured e-commerce application designed to provide users with an easy way to browse and purchase products online. The application allows users to view product listings, search products, add them to their cart, and complete the checkout process.

## Features

- **User Authentication**: Sign up and log in for personalized experiences.
- **Product Browsing**: Browse through categories of products and view product details.
- **Search Functionality**: Search for products by name, category, or other filters.
- **Shopping Cart**: Add products to your cart and view cart contents.
- **Checkout Process**: Easy and secure checkout with payment gateway integration.

## Admin Features:
-  Admin Authentication : Admin login to access the backend management dashboard.
-  Product Management: Add, update, or delete products listed on the platform.
-  User Management: View, edit, or delete user accounts.
 - Order Management: Track and manage customer orders, including marking them as shipped or completed.

## Technologies Used

- **Frontend**: React.js (with hooks, context, and routing)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token) Authentication
- **Payment Integration**: Stripe API
- **Styling**: Tailwind CSS
- **Version Control**: Git

## Installation

### Prerequisites

1. [Node.js](https://nodejs.org/) (version >=14)
2. [MongoDB](https://www.mongodb.com/try/download/community) 
3. [Stripe Account](https://stripe.com/docs/keys) (if using Stripe for payments)

### Clone the Repository

```bash
git clone https://github.com/your-username/quick-mart.git
cd quick-mart
```

### Install Dependencies

For both frontend and backend, you need to install dependencies.

1. **Frontend**

```bash
cd frontend
npm install
```

2. **Backend**

```bash
cd backend
npm install
```

### Set Up Environment Variables

Create a `.env` file in both the **frontend** and **backend** directories and configure them as follows:

#### Backend (.env)

MONGODB_URI = "use your url "

TOKEN_SECRET_KEY = assdfkdjfhgldqwpoiyruezzbcmvc
FRONTEND_URL = http://localhost:3000

#### Frontend (.env)

REACT_APP_CLOUD_NAME_CLOUDINARY = dfdxd1ld7


### Running the Application

1. **Start the backend server**:

```bash
cd backend
npm run dev
```

2. **Start the frontend development server**:

```bash
cd frontend
npm start
```

The backend will run on `http://localhost:8080` and the frontend on `http://localhost:3000`.

## Usage

Once both the frontend and backend servers are running, you can navigate to `http://localhost:3000` in your browser to interact with the Quick Mart application. You can:

- Browse products
- Add products to the cart
- Sign up and log in to make purchases
- Proceed to checkout and enter payment details
- Detailed admin features
