const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const multer = require('multer');

// const { MongoClient } = require("mongoose");
const userRoleRoutes = require("./app/module/userrole/userrole.route");
const menuItemRoutes=require("./app/module/menus/menu.route");
const serialGenerate =require('./app/module/serialnogenerate/serialnogenerate.route')
const userCreateRoute=require('./app/module/user/user.route')
const companyRoute = require('./app/module/reportdetails/reportdetails.route');
const itemsizeRoute=require('./app/module/itemsize/itemsize.route')
const itemunitRoute=require('./app/module/itemunitinfo/itemunit.route')
const fgIteminfoRoute=require('./app/module/fgiteminformation/iteminfo.route')
const rmIteminfoRoute=require('./app/module/rmiteminformation/iteminfo.route')
const categoryInfoRoute=require('./app/module/categoryinformation/categoryinfo.route')
const cftInfoRoute=require('./app/module/cftinformation/cft.route')
const supplierInfoRoute=require('./app/module/supplierinformation/supplier.route')
const clientInfoRoute=require('./app/module/clientinformation/client.route')
const upload=require('./app/module/multer/configuration')

require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'))
const port = 5000;

// app.use(upload.single('image'));

const uri = process.env.MONGO_URI;


if (!uri) {
  console.error('Error: MongoDB URI is not defined in the environment variables');
  process.exit(1);
}

mongoose.Promise = global.Promise;
mongoose
  .connect(uri)
  .then(() =>{ 
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));


  // connect(process.env.MONGO_URI)
  // MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// application route

app.use('/userrole',userRoleRoutes);
app.use('/userrole',userRoleRoutes);
app.use('/getuserrole',userRoleRoutes);

app.use('/menuitems',menuItemRoutes);
app.use('/menuitems/update',menuItemRoutes);
app.use('/menuitems/create',menuItemRoutes);
app.use('/menuitems',menuItemRoutes);
app.use('/menuitems/updatesingle-menu',menuItemRoutes);
app.use('/menuitems/singlemenu',menuItemRoutes);
app.use('/menuitems/singlemenu/changingparent',menuItemRoutes);
app.use('/menuitems/deletemenu',menuItemRoutes);
app.use('/menuitems/updatenesteditems',menuItemRoutes);

app.use('/serial-create',serialGenerate);
app.use('/serial-getdata',serialGenerate);
app.use('/user-create',userCreateRoute);
app.use('/get-user',userCreateRoute);
app.use('/user',userCreateRoute);
app.use('/user/update',userCreateRoute);
app.use('/user/change',userCreateRoute);
app.use('/user/delete',userCreateRoute);
app.use('/user/status',userCreateRoute);
app.use('/user/updatestatus',userCreateRoute);
app.use('/reportdata', companyRoute);
app.use('/reportdata/getdata', companyRoute);

app.use('/itemzise',itemsizeRoute);
app.use('/itemunit',itemunitRoute);
app.use('/iteminfo',fgIteminfoRoute);
app.use('/rmiteminfo',rmIteminfoRoute);
app.use('/categoryinfo',categoryInfoRoute);
app.use('/cftinfo',cftInfoRoute);
app.use('/supplierinfo',supplierInfoRoute);
app.use('/clientinfo',clientInfoRoute)


// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500).json({ error: err });
// }

app.get('/', (req, res) => {
  res.send('Running inventory management');
});


app.listen(port, () => {
  console.log(`app litstening at port ${port}`);
});

