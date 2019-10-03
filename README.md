# Shopping-Cart
shopping cart application using nodejs, express framework, mongodb,bootstrap and handlebars template.

# Features:
* User Authentication via Passport
* User Sign Up
* User Sign In/Out
* User Profile With Previous Completed Orders
* Form Validation via CSURF
* Cart Item Addition, Item Removal, Item Checkout
* Session Token via Stripe
* Credit Card Payment/Validation/Fraud Detection via Stripe

## Getting Started
### Requirements:
```
Node.js
NPM
MongoDB Server
```
### Installing

First, Install the needed packages:
```
npm install
```
Start your MongoDB database:
```
C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe
```
Update your local database server:
```
node ./seed/product-seeder.js
```
start Node:
```
npm start
```
Start NodeJS server at http://localhost:3000


## Built With
**Back-End:** NodeJS, Express, MongoDB, Mongoose.

**Front-end:** Handlebars and Bootstrap.

**JS Libraries/Dependencies::**
bcrypt-nodejs, connect-flash, connect-mongo, cookie-parser, csurf, debug, express, express-handlebars, express-session,
express-validator, hbs, http-errors, JQuery (CDN), mongoose, morgan, passport, passport-local, stripe

## Acknowledgments

this project based on : https://www.youtube.com/watch?v=-3vvxn78MH4&index=2&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp
