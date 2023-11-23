const express = require("express")
const app = express()
const multer = require("multer")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 4000

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
const upload = multer({storage:storage}) 

app.post("/fileupload",upload.single("myfile"),(req,res)=>{
    res.status(200).json({
        msg:"file uploads sucessfully"
    })
})
app.listen(port,()=>{
  console.log(`listening on port no ${port}`) 
})
