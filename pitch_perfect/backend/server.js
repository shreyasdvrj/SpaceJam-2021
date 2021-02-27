const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 5000;

app.use(express.json())
app.use(bodyParser.json());

const userRouter = require('./routes/userRouter')
const mentorRouter = require('./routes/mentorRouter')

//Routes
app.use('/user', userRouter)
app.use('/mentor', mentorRouter)

//Server Listen
app.listen(PORT, function () {
    console.log("Server Listening on port : " + PORT);
});


app.use((err, req, res, next) => {
    console.log(err);
    next();
  });
//MongoDb connection
const URI = process.env.MONGO_URL

mongoose.connect('mongodb://127.0.0.1:27017/pitchperfect', { useNewUrlParser : true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB databse connected");
})