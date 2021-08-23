const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//connect to mongodb database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB is connected!"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from Nodejs");
})

app.post('/register', (req, res) => {
    console.log("reaching register on backend");
    console.log(req.body.name, req.body.email, req.body.password);

    //this is where we can pass all the data to mongodb

    //always must send a response (send feed back to frontend - succes/failure)
    res.json({
        response: "User registered Succesfully!"
    })
});

app.get("/api/users", (req, res) => {
    //const userDB = User.find();
    res.json({
        users: [
            {
                name: "Sam",
                city: "Nottingham",
                age: 30
            },
            {
                name: "Sarah",
                city: "Nottingham",
                age: 29
            },
            {
                name: "Henderson",
                city: "Nottingham",
                age: 1
            },
        ]
    })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});