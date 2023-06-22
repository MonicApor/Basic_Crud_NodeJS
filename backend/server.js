const express = require('express'); //node framework
const cors = require('cors'); //api
const mongoose = require('mongoose');

const HealthRouter = require('./routes/health');

require('dotenv').config() //environmental variable

const app = express();
const port = process.env.PORT || 5000; //if the port 5000 is used the server will look for open port

//middleware
app.use(cors()); // instantiate the cors package
app.use(express.json()) //to make the data in json format



// mogodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});

app.use('/health', HealthRouter);


app.listen(port, ()=> {
    console.log(`Server is running in port : ${port}`);
})




// //database connection
// mongoose.connect(process.env.ATLAS_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(() => {
//     app.listen(port, () => console.log(`Server is running in port: ${port}`));
// }).catch((error) => console.log(`Cannot connect error: ${error}`));


