const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/FacebookUserDb")
.then(()=>{
    console.log("Database connection successful.")
}).catch((error)=>{
    console.log("An error occured.... Please try after sometime.")
})