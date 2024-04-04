const express = require("express");
const mongoose = require("mongoose");
const todoHandler=require('./routeHandler/todoHandler')
const userRoleRoutes = require("./app/module/userrole/userrole.route");
const menuItemRoutes=require("./app/module/menus/menu.route");
const serialGenerate =require('./app/module/serialnogenerate/serialnogenerate.route')
const userCreateRoute=require('./app/module/user/user.route')
const companyRoute = require('./app/module/reportdetails/reportdetails.route');
require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/inventory")
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

// application route
app.use('/todo',todoHandler)
app.use('/userrole',userRoleRoutes)
app.use('/userrole',userRoleRoutes)
app.use('/getuserrole',userRoleRoutes)
app.use('/menuitems',menuItemRoutes)
app.use('/menuitems/insert',menuItemRoutes)

app.use('/serial-create',serialGenerate)
app.use('/serial-getdata',serialGenerate)
app.use('/user-create',userCreateRoute)
app.use('/get-user',userCreateRoute)
app.use('/user',userCreateRoute)
app.use('/user/update',userCreateRoute)
app.use('/user/change',userCreateRoute)
app.use('/user/delete',userCreateRoute)
app.use('/user/status',userCreateRoute)
app.use('/user/updatestatus',userCreateRoute)
app.use('/reportdata', companyRoute);
app.use('/reportdata/getdata', companyRoute);


function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(port, () => {
  console.log(`app litstening at port ${port}`);
});

// const app = require('./app');

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const app = require('./app.js');
// const UserRoles=require('./app/module/userroll/userroll.model.js')
// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// require("dotenv").config();

// async function bootstrap() {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/inventory');
//     console.log('Database connection successful');

//     // const userrole=await UserRoles.create({
//     //   userrollname: 'example'
//     // })
//     // console.log(userrole)
//   } catch (err) {
//     console.error('Failed to connect to the database:', err);
//     process.exit(1); // Exit the process if unable to connect to the database
//   }
// }

// bootstrap();

// app.listen(port, (err) => {
//   if (err) {
//     console.error('Failed to start the server:', err);
//     process.exit(1); // Exit the process if unable to start the server
//   }
//   console.log(`Server is listening on port ${port}`);
// });

// const app = require('./app.js');

// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// const { MongoClient, ServerApiVersion } = require("mongodb");
// require("dotenv").config();

// async function bootstrap() {
//   try{
//     await mongoose.connect('mongodb://127.0.0.1:27017/inventory');
// console.log('Database connection successfull')
//   }
//   catch(err){
//     console.log(`Failed to connect database`,err);
//     process.exit(1);
//   }
// }

// bootstrap()

// app.listen(port, (err) => {
//   if (err) {
//     console.error('Failed to start the server:', err);
//     process.exit(1); // Exit the process if unable to start the server
//   }
//   console.log(`Server is listening on port ${port}`);
// })

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u4yxlqg.mongodb.net/?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u4yxlqg.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // await client.connect();
// await mongoose.connect("mongodb://127.0.0.1:27017/inventory")
// console.log('Database connected')

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//     // const navbarCollection = client.db("inventory").collection("menu");
//     // const userCollection = client.db("inventory").collection("users");
//     // const userRoleCollection = client.db("inventory").collection("userroles");

//     // app.get("/navbar", async (req, res) => {
//     //   const query = {};
//     //   const cursor = navbarCollection.find(query);
//     //   const data = await cursor.toArray();
//     //   res.send(data);
//     // });

//     // app.post("/register", async (req, res) => {
//     //   try {
//     //     const { username, email, password, isActive } = req.body;
//     //     // Check if user already exists
//     //     const existingUser = await userCollection.findOne({ email });
//     //     if (existingUser) {
//     //       return res.status(400).json({ message: "User already exists" });
//     //     } else {
//     //       //  Hash password
//     //       const hashedPassword = await bcrypt.hash(password, 10);

//     //       const result = await userCollection.insertOne({
//     //         username,
//     //         email,
//     //         password: hashedPassword,
//     //         isActive,
//     //       });

//     //       res.status(201).json({ message: "User registered successfully" });
//     //     }
//     //     // console.log(existingUser)
//     //   } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ message: "Server Error" });
//     //   }
//     // });

//     // app.post("/login", async (req, res) => {
//     //   try {
//     //     const { email, password } = req.body;
//     //     // Check if user exists
//     //     const user = await userCollection.findOne({ email });

//     //     if (!user || !(await bcrypt.compare(password, user.password))) {
//     //       return res.status(400).json({ message: "Invalid email or password" });
//     //     }

//     //     res.status(200).json({ message: "Login successful" });
//     //   } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ message: "Server Error" });
//     //   }
//     // });

//     // app.get("/getuser", async (req, res) => {
//     //   const query = {};
//     //   const cursor = userCollection.find(query);
//     //   const data = await cursor.toArray();
//     //   res.send(data);
//     // });
//     // app.get("/get-user-role", async (req, res) => {
//     //   const query = {};
//     //   const cursor = userRoleCollection.find(query);
//     //   const data = await cursor.toArray();
//     //   res.send(data);
//     // });

// //     app.post('/create-user-roll',async(req,res)=>{
// //       try{
// //         // const {userrollname}=req.body;
// //         // console.log(userrollname)
// //         // const existingUserRoll= await UserRoles.findOne({userrollname})
// //         // if(existingUserRoll){
// //         //   return res.status(400).json({ message: "User roll already exists" });
// //         // }
// //         // else{
// //         //   await UserRoles.create({ userrollname });
// //         //   res.status(201).json({ message: "User roll created successfully" });
// //         // }
// //         const newUserRole = new UserRoles({ userrollname: 'example' });
// // await newUserRole.save();
// //       }
// //       catch(error){
// //         console.error(error);
// //         res.status(500).json({ message: "Server Error" });
// //       }
// //     })
//   } finally {
//   }
// }
// run().catch(console.dir);
