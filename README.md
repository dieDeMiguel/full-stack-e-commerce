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

Enjoy your e-commerce journey!\
\
\
Running the Stripe Module: \
\
Listen to payment Events: `stripe listen --forward-to localhost:3000/webhooks/stripe `
