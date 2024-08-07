const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     console.log('file',file)
//     let ext = path.extname(file.originalname);
//     let basename=path.basename(file.originalname,ext)
//     cb(null, Date.now() + basename + ext);
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, callback) {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       callback(null, true);
//     } else {
//       console.log("only jpg and png file supported!");
//       callback(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 2,
//   },
// });
// module.exports = upload;
