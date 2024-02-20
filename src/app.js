// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoleRoutes = require("./userroll.route");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
// .then(() => {
//     console.log("Connected to MongoDB");
// })
// .catch((error) => {
//     console.error("MongoDB connection failed:", error);
//     process.exit(1);
// });

// app.use("/api/v1", userRoleRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// // const express = require("express");
// // const app = express();
// // const userRollRoutes = require("./app/module/userroll/userroll.route.js");
// // const cors = require("cors");

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // console.log("1");
// // app.use("/api/v1/userroll", userRollRoutes);

// // module.exports = app;



// // const express = require("express");
// // const app = express();
// // const userRollRoutes=require("./app/module/userroll/userroll.route.js")
// // const cors = require("cors");

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use("/api/v1/userroll", userRollRoutes);

// // const port = 3000;
// // app.listen(port, () => {
// //   console.log(`Server is running on http://localhost:${port}`);
// // });

// // app.get("/api/v1/userroll");
// // app.get("/", (req, res) => {
// //     res.send("Hello World!");
// //   });

// //   const userRoleSchema = new mongoose.Schema({
// //     userrollname: String
// //   }, { timestamps: true });
// //   const UserRoles = mongoose.model('UserRoles', userRoleSchema);
// // console.log(UserRoles)


// // console.log()

// // module.exports = app;

