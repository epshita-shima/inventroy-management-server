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
app.use('/menuitems/update',menuItemRoutes)
app.use('/menuitems/create',menuItemRoutes)
app.use('/menuitems',menuItemRoutes)
app.use('/menuitems/updatesingle-menu',menuItemRoutes)
app.use('/menuitems/singlemenu',menuItemRoutes)
app.use('/menuitems/singlemenu/changingparent',menuItemRoutes)
app.use('/menuitems/deletemenu',menuItemRoutes)
// app.use('/menuitems/updatenesteditems',menuItemRoutes)

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

app.get('/', (req, res) => {
  res.send('Running inventory management');
});

app.listen(port, () => {
  console.log(`app litstening at port ${port}`);
});

