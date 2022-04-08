const mongoose = require('mongoose');
const express = require ('express');
const app = express();

//DB
const URLCONFIG="mongodb+srv://Admin:thapaadarsh@cluster0.udby5.mongodb.net/test?retryWrites=true&w=majority"
const data =mongoose.connect(URLCONFIG,{
    useNewUrlParser: true,
}).then(res=console.log('database connected')).catch(err=>console.log(err))

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connectin error:"));
db.once ("open",function(){
    app.listen(process.env.PORT);
    console.log('the app running on :'+process.env)
})
//const User = require ('./model/userschema');



const middleware = (req,res, next) => {
    console.log('jai shree ram');
    next();
};

app.get('/', (req, res) => {
    res.send('hello shiv ji');
});

app.get('/login', (req, res) => {
    res.send('hello shiv ji');
});

app.get('/signup', middleware, (req, res) => {
    console.log('jai shree2 ram');
    res.send('hello shiv ji2');
});

app.listen(3000, () => {
    console.log('server is rinning at 3000');
})
