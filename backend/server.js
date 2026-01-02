const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/authRoutes"));

//test route
app.get('/', (req, res) => {
    res.send("API is running....");
});

//mongoDb connection
mongoose.connect(process.env.Mongo_URI)
   .then(() => {
    console.log("MongoDb connected");
    app.listen(5000,()=>
     console.log("Server is running on port 5000"));
   })
   .catch((err) => {
    console.log(err);
   })