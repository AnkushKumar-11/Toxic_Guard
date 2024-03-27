const express = require("express");
const Facebook = require("facebook-node-sdk");
const cors = require("cors");
require("./models/database/db");
const userSchema = require("./models/database/userSchema");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const fb = new Facebook({
  appID: "342731435436198",
  secret: "413a2d605d195539a57f9c8a9dbe2acb",
});

// fb.api('/me',{access_token: "EAAE3tmF2aKYBOzi20bbqngrPw57UrjGqMxIabF4cVQepUnOFc0vZAZAdd5f6x9ZAQ3eDoOoPxPyJ3xy16HosD7DIbeIAzZAcujKHlcr8cNDZA2GV5WYkTb9vz2ZCtWdRxv8TiLj8m8Imrrodl7x76brggObHGrZBQ7eJQy928ZBxVhOD3SEZAf4iZAWNBOCJ706YOkfnuPcyS4yc114cyptQZDZD"},(err, data)=>{
//     if (err) {
//         console.error('Error occurred:', err);
//     } else {
//         console.log('Data received:', data);
//     }
// })
app.post("/login", async (req, res) => {
  try {
    const check = await axios.get(
      `https://graph.facebook.com/me?access_token=${req.body.accessToken}`
    );
    if (check.data.name) {
      const findUser = await userSchema.findOne({ userId: check.data.id });
      if (!findUser) {
        await userSchema.insertMany({
          name: check.data.name,
          userId: check.data.id,
          accessToken: req.body.accessToken,
        });
        res.status(200).send(check.data);
      } else {
        await userSchema.updateOne(
          { userId: check.data.id },
          {$set: { accessToken: req.body.accessToken }}
        );
        res.status(200).send(check.data);
      }
    } else {
      res.send("error");
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/validation", async (req, res) => {
  try {
    const id = req.headers.id
    const findUser = await userSchema.findOne({ userId: id });
    const check = await axios.get(
      `https://graph.facebook.com/me?access_token=${findUser.accessToken}`)
      if (check.data.name) {
        res.send({status:"valid"})
      }
      else{
        res.send({status:"invalid"})
      }

  } catch (error) {
    res.send(error);
  }
});
app.listen(80, () => {
  console.log("Server is running");
});
