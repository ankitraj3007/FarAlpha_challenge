# Backend API

This repository contains a simple backend API built with Node.js and Express. The API provides a single endpoint to return a greeting message.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the Repository**
2. 
   git clone <https://github.com/your-username/your-repository.git>
   cd your-repository

   Install Dependencies

Make sure you are in the project directory and run:

bash
Copy code
npm install
Running the API
Start the Server

To start the server, run:

bash
Copy code
pm2 start server.js --name my-backend-api
Alternatively, if you don't have PM2 installed, you can start the server using Node.js directly:

bash
Copy code
node server.js
Verify the Server is Running

By default, the server listens on port 80. Ensure the application is running by accessing:

bash
Copy code
curl http://localhost/sayHello
You should receive the following response:

json
Copy code
{"message": "Hello User"}
Testing the API
Make a GET Request

To test the API, use the following curl command:

bash
Copy code
curl http://<VM_IP>/sayHello
Replace <VM_IP> with the public IP address of your virtual machine.

You should receive the following response:

json
{"message": "Hello User"}


markdown
Copy code






