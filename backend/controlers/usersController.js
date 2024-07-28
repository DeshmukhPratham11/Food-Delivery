const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

  const registerUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;
  //find whether email already exists or not
  const user = await UserModel.findOne({ email: email });
  //this will return a true or false value
  if (user) {
    return res.send("User already exists");
  }

  //hash the password
  const salt = await bcrypt.genSalt(10);
  //1- 0 how may times rotate before generating salt, rotation-crytography
  const hashedPassword = await bcrypt.hash(password, salt);

  //save logic
  const newUser = new UserModel({name:name,email:email,password:hashedPassword})
    const savedUser = newUser.save();
    
    //create a json web token

    const token = jwt.sign({ userId: savedUser._id }, "989092");

    
  console.log(req.body);
    res.json({user:newUser,token});
};
  
const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.send(400).send("User does not exist");
  }
  

  const isPasswordMatchingFromDb = await bcrypt.compare(
    password,
    user.password
  );
  if (isPasswordMatchingFromDb) {
    const token = jwt.sign({ userId: user._id }, "randomsecret");
    return res.status(200).json({
      user: user,
      token: token,
    });
  }

  return res.statua(401).send("Incorrect login credentials");

  
};

module.exports = (registerUser);
module.exports = (loginUser);
