const express = require('express')
const path = require('path')

const app = express()
const date=new Date ();
const day = date.getDay();
const hour=date.getHours();

const logger = (req , res , next)=>{
  if ((day!= 6||7) && hour>=9 && hour <17){
    next();
  }else{
    res.send("this website is closed")
  }
}
app.use(logger);


app.use(express.static(__dirname + '/public'))




const port = 4000;


app.listen(port, (err) => {
    err
      ? console.log(err)
      : console.log(`the server is running on port ${port}...`);
  });
  

  app.use(express.static(__dirname + '/public'));