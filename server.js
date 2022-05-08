const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const RoomRoutes = require('./routes/Room');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(RoomRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://twg:twg123@mernapp.65jln.mongodb.net/hotelmanagement?retryWrites=true&w=majority';

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