const mongoose = require('mongoose')
const URI  = "mongodb://localhost:27017/zaidcv";


const connectToMongo = ()=>{
    mongoose.connect(URI , () =>{
        console.log("connected to mongoose succesfully")
    })
}
module.exports = connectToMongo; 