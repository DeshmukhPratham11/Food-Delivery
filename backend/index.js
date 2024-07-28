const express = require('express');
const mongoose = require('mongoose');
const app = express();



const dishes = require("./routes/dishesRoutes");
const registerUser = require("./routes/userRoutes");

//const require = createRequire(import.meta.url);



mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const port = 5000;
//const getDishes = require("./controlers/dishesController");//
//const { registerUser } = require('./controlers/usersController');
app.use(express.json());

app.use("/api", dishes);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

//app.get("/api/dishes",getDishes);
//SVGClipPathElement.use("/api", dishes);

app.use("/api", registerUser);
//app.post("/api/user/register", registerUser);

// mongoose
//   .connect("")
//   .then(() => console.log());


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })