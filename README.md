# **Full-Stack E-Commerce**

This repository contains a full-stack e-commerce application built with Next.js and Prisma.

## **Installation**

Follow these steps to install the project:

1. Clone the repository:

git clone https://github.com/yourusername/full-stack-e-commerce.git

1. Navigate into the project directory:

cd full-stack-e-commerce

1. Install the dependencies:

npm install

## **Configuration**

Before running the application, you need to create a `.env` file in the root directory of the project with the following content:

DATABASE_URL="file:./dev.db"

ADMIN_USERNAME="admin"

HASHED_ADMIN_PASSWORD=sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8lThf+rDKy8hg==\
\
Replace `"admin"` with your desired admin username and replace `sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8lThf+rDKy8hg==` with a hashed version of your desired admin password.\
\
(In this example, the string associated with `HASHED_ADMIN_PASSWORD` is the hashed version of the string "password". This means that the actual password is "password", but it has been hashed for security reasons and the hashed version is stored in the environment variable. You can change this to a hashed version of any password you prefer. Remember, it's important to never store plain-text passwords, always use a hashed version for security.)

## **Database Migration**

To set up the database schema, you need to run Prisma's migration:

npx prisma migrate dev

This command will apply the migrations found in the `prisma/migrations` directory to your database.

## **Running the Application**

After installing the dependencies and setting up the database, you can start the application:

npm run dev

This command will start the Next.js development server on `http://localhost:3000`.

## **Accessing the Application**

There are two ways to access the application: as a User and as an Admin.

### **User Access**

Users can access the application by navigating to the base URL of the application. For example, if you're running the application locally, the URL would be `http://localhost:3000`.

Users can browse products, add them to their cart, and proceed to checkout. They will need to enter their email address to complete the purchase.

### **Admin Access**

Admins can access the admin dashboard by navigating to the `/admin` path of the application. For example, if you're running the application locally, the URL would be `http://localhost:3000/admin`.

The admin dashboard provides a view of sales, customers, and active products. It also allows the admin to manage products.

To log in as an admin, you will need the admin username and password. These are set as environment variables in your `.env` file:

- `ADMIN_USERNAME`: The username for the admin user.
- `HASHED_ADMIN_PASSWORD`: The hashed password for the admin user.

Remember, the actual password is not the hashed password stored in the `.env` file. You should know the actual password that corresponds to the hashed password in the `.env` file.

### **Running the Stripe Module:**

### Listen to payment Events: `stripe listen --forward-to localhost:3000/webhooks/stripe`

###

### **Demo Purchases**

For testing purposes, please ensure that the email used for the purchase matches the email of the account registered on Resend. If the emails do not match, the purchase will not be successful.

This is because the application uses the Resend service for email notifications. If the emails do not match, Resend will not be able to send the notification, and the purchase will fail.

Please keep this in mind when testing the application.\
\
Credit Card Number for Demo Purschases: \
Card #: 4242 4242 4242 4242 \
Expiration Date: Any date in the future.\
CVC: 424

## **Environment Variables**

This application requires the following environment variables to be defined in the `.env` file:

- `DATABASE_URL`: This is the connection string to your database. For a local SQLite database, it would look like `file:./dev.db`.
- `ADMIN_USERNAME`: The username for the admin user.
- `HASHED_ADMIN_PASSWORD`: The hashed password for the admin user.
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Your public key from Stripe. You can find this in your Stripe Dashboard (https://dashboard.stripe.com).
- `STRIPE_SECRET_KEY`: Your secret key from Stripe. You can find this in your Stripe Dashboard. Be sure to keep this value secret.
- `RESEND_API_KEY`: Your API key for the Resend service. You can find this in your Resend account.

Here's an example of what your `.env` file might look like:

```env
DATABASE_URL="file:./dev.db"
ADMIN_USERNAME="admin"
HASHED_ADMIN_PASSWORD="sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8lThf+rDKy8hg=="
NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_1234abcd"
STRIPE_SECRET_KEY="sk_test_1234abcd"
RESEND_API_KEY="your-resend-api-key"
```
