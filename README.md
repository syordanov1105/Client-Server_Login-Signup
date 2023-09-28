# Client-Server Login/Signup Web App

This web application provides user authentication and registration features using Node.js on the server-side and MySQL as database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)

## Features

- User registration with email, first name, last name and password
- User login with email and password
- Email and password validation
- MySQL database integration

## Prerequisites

Before you begin, make sure you meet the following requirements:

- Node.js installed
- MySQL database server installed

## Getting Started

1. Clone the repository:
   
   ```bash
   git https://github.com/syordanov1105/Client-Server_Login-Signup.git
   //Navigate to root folder
   cd Client-Server_Login-Signup
   //Install the dependencies
   npm install
   ```
## Database Setup

1.Register to MySQL server
2.Create database "telebid_app" and table "userInfo" -->(If you want your own names change the database, user and password in database.js file)

## Running the Application

```bash
//navigate to server folder
cd server/
//start the server
node server.js

//if you have nodemon installed this also will work
nodemon server.js
```

## Usage
1.Access the client-side in your browser.(it doesn't matter which html you load, because there is buttons for navigating through the pages)
2.Sign Up or Log in and if everything is correct you should see "Welcome"(secret.html page).
3.Don't forget that you should enter valid data otherwise you will not be able to register.

