const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/database/userSchema");

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
      .then((currentUser)=>{
        if (currentUser) {
          currentUser.accessToken=accessToken;
          currentUser.save().then((updatedUser)=>{
            done(null,updatedUser)
          })
        }else{
            new User({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                image: profile.photos[0].value,
                accessToken:accessToken
              }).save().then((newUser)=>{
                  done(null,newUser)
              });
        }
      })
    }
  )
);
