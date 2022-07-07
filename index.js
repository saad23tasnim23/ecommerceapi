const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch((err)=>{console.log(err)
})

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("server is runnning at port 5000")
})
//mongobd url = mongodb+srv://saadtasnim:<password>@cluster0.kk4bf.mongodb.net/?retryWrites=true&w=majority
//mongodb password = saad23tasnim23

