const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const mongoString = `
    mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zzecs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority
`
mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.connection.on("error", function(error) {
    console.log(error)
});

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database..")
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running...")
});