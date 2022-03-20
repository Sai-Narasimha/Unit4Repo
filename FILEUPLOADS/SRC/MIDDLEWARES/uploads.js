const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,'../MY_UPLOADS'))
    },
    filename: function (req, file, callback) {
      const uniquePreffix =   Date.now()
      callback(null,  uniquePreffix + '-' + file.originalname)
    }
  });

  const filefilter =  (req, file, callback) => {
      if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
          
          // To accept the file pass `true`, like so:
          callback(null, true)
      }
      else{

          // To reject this file pass `false`, like so:
          callback(null, false)
      }
  
  }
const options = {
    storage: storage,
    filefilter: filefilter,
    limits: {
        fileSize : 1024 * 1024 * 5
    }
}
const upload = multer(options);

module.exports = upload