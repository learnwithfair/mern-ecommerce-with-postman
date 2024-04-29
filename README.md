## MERN STUCK E-COMMERCE PROJECT-WITH-POSTMAN

Thanks for visiting my GitHub account!

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZT5qJiTrdjCqCliDz_UQGGFTvr_hmqFt9DOjGKC80Q&s)

Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. One of the most famous stacks that is used for Web Development is the MERN stack. This stack provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications. [more](https://www.geeksforgeeks.org/mern-stack/)

## Source Code (Download)

[Click Here](https://mega.nz/file/UeVAjBzQ#WpMkqa8uuP658mLhAJ3v1JEUlBWFpxZJINM0dvCSw2Y)

## Required Software (Download)

- VS Code, Download ->https://code.visualstudio.com/download
- Node, Download-> https://nodejs.org/en/download
- MongoDB Shell(msi) , Download-> https://www.mongodb.com/try/download/shell
- MongoDB Compass (msi), Download-> https://www.mongodb.com/try/download/community
- Postman, Download-> https://www.postman.com/downloads/

**Or Online Database (MongoDB Atlas)**

- Register -> https://www.mongodb.com/cloud/atlas/register

## ========== Environment Setup ==========

1. Instal Node.js
2. To verify installation into command form by node -v
3. For initialization npm write the query in the command window as npm init -y
4. Setup the opening file into the package.json and change the file with main:'server.js'
5. To create a server using the express package then write a query into the command window as npm install express.
   Write code in the server file for initialization
   const express = require("express");
   const app = express();
   app.listen(3000, () => {
   console.log("Server is running at http://localhost:3000");
   });

6. Install the nodemon package for automatically running the server as- npm i --save-dev nodemon (For Developing purpose)
7. setup the package.json file in the scripts key, write
   "scripts": {
   "start": "node ./resources/backend/server.js",
   "dev": "nodemon ./resources/backend/server.js",
   "test": "echo \"Error: no test specified\" && exit 1"
   },
8. use the Morgan package for automatic restart. Hence install the morgan package as npm install --save-dev morgan (Development purpose)
   Write code in the server file for initialization
   const morgan = require("morgan");
   app.use(morgan("dev")); --> Middlewire.
9. Install Postman software for API testing by the URL endpoint.
10. Install Mongobd + MongobdCompass and Mongoshell (For Database)

## ========== Connect MongoDB Database ==========

1. Install Mondodb + Mongodb Compass and Mongodb Shell download from the google.
2. Set up Environment Variable in drive:c/program file
3. Create a directory in the base path of the c drive named data. Inside the data directory create another folder db.
4. Write the command in the CMD window as Mongod. And write the other command in the other CMD window as mongosh.
5. Then Check the version as mongod --version and mongosh --version.
6. Install mongoose package as npm i mongoose
7. Create an atlas account. In the atlas account create a cluster that have a user(as atlas admin) and network access with any access IP address.
8. Connect the database using URL from the atlas cluster or local Mongodb compass using the mongoose package as mongoose. connect('mongodb://localhost:27017/database-name);


## Step-1: Server Side Configuration

### API-> .env

```bash
PORT_NUMBER=3000
MOGODB_ATLAS_URL=From-Atlas-cluster-account

JWT_ACTIVATION_KEY=JWTUserProcessRegisterToken
JWT_RESET_PASSWORD_KEY=JWTUserResetPasswordKey
JWT_LOGIN_KEY=UserAccessKeyHere

SMTP_USERNAME=Email-ID
SMTP_PASSWORD=password
CLIENT_URL=http://localhost:3000 (Server URL)

```

### API-> resources/js/secret.js

```bash
const mongodbURL = "mongodb://localhost:27017/database-name";(For Local Database)
```

## Step-2 Run Command in the root directory

```bash
npm install --force
npm run dev
```

## Necessary Code

```bash
const express = require("express"); // Create Express server
const morgan = require("morgan"); // For automatically run server
const cookieParser = require("cookie-parser"); // For set Cookie
const createError = require("http-errors"); // For create HTTP Error
const xssClean = require("xss-clean"); // For  Secure API
const bodyParser = require("body-parser"); // For Get/ Set data into body
const cors = require("cors"); // To set access for client-side URL
```

/_
|--------------------------------------------------------------------------
| Initialize Middleware
|--------------------------------------------------------------------------
_/

```bash
app.use(cookieParser()); // For set Cookie
app.use(morgan("dev")); // For automatically run server
app.use(xssClean()); // For  Secure api
app.use(bodyParser.json()); // For Set, Read data into the body and display JSON Format Text
app.use(bodyParser.urlencoded({ extended: true })); // Get HTML Form Data
app.use(setRefreshToken); // For set Refresh Token [Automatically call this middleware for all route]
// To get access to Client side URL
app.use(cors(
 {
   origin: BASE_URL, // Frontend Base URL
   credentials: true
 }
));
app.use(express.static("public")); // To Display Server site image
```



#learnwithfair #rahtulrabbi #rahatul-rabbi #learn-with-fair
