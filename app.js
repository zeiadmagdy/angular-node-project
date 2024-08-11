const express = require("express");
const booksPath = require("./routers/books");
const authorsPath = require("./routers/authors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("error connecting to db", err));

//init app
const app = express();

//apply Middleware
app.use(express.json());

//Routers
app.use("/api/books", booksPath);
app.use("/api/authors", authorsPath);




const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${Port}`));
