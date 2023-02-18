const route = require("express").Router();
const { default: axios } = require("axios");
const User = require("../db/models/users");
const jsonwebtoken = require('jsonwebtoken')

route.post("/signup", (req, resp) => {
  let user = new User(req.body);
  user.save();
  resp.json({
    success: true,
  });
});

route.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body);
  if (user) {
    jsonwebtoken.sign({ id: user._id }, "cat says miooon in FSD", {
        expiresIn: "1d"
    }, function (err, Token) {
        resp.json({
            success:true,
            user,
            token: Token
        });
    })
  }
});

route.get("/get-users", async (req, resp) => {
  let users = await User.find();
  resp.json(users);
});

route.post("/google-login", async (req, res) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
      req.body.access_token
  );
  let user = await User.findOne({ user_email: data.email });
  if (user) {
      jsonwebtoken.sign({ id: user._id }, "cat says miooon in FSD", {
          expiresIn: "1d"
      }, function (err, Token) {

          res.json({
              success:true,
              user,
              token: Token
          });
      })
  } else {
    const user = new User({
      user_picture: data.picture,
      user_name: data.name,
      user_email: data.email,
      user_password: data.id,
      user_reviews: [],
    });
    await user.save();
    User.findOne({ user_name: data.name }, (err, user) => {
      if (user) {
        jsonwebtoken.sign({ id: user._id }, "cat says miooon in FSD", {
            expiresIn: "1h"
        }, function (err, Token) {

            res.json({
                success:true,
                user,
                token: Token
            });
        })
    }
    });
  }
});

route.post('/check-session', (req, res) => {
  jsonwebtoken.verify(req.body.token, "cat says miooon in FSD", async (err, data) => {
      let user = await User.findById(data.id);
      res.json({user});
  })

});



route.delete("/delete-user", async (req, resp) => {
  await User.findByIdAndDelete(req.query.id);
  resp.json({ success: true });
});


module.exports = route;
