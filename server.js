const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const PackageRoutes = require('./routes/Package');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(PackageRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://kawshika:it20088064@carstest.6uvuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    

.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});