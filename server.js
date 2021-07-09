const express = require('express')
const path = require('path')

const app = express()

// app.get('/', (req, res)=>{
//   // res.send('hello')
//   res.sendFile(__dirname + '/public/home.html')
// })
app.use(express.static(__dirname + '/public'))

const port = 4000;

app.listen(port, (err) => {
    err
      ? console.log(err)
      : console.log(`the server is running on port ${port}...`);
  });
  

  // app.get('/',(req,res)=>{
  //   res.sendfile(__dirname + '/public/home.html');
  // })
  //   app.get('/contact',(req,res)=>{
  //   res.sendfile(__dirname + '/public/contact.html');
  // })
  
  //   app.get('/services',(req,res)=>{
  //   res.sendfile(__dirname + '/public/services.html');
  // })
  // app.use(express.static(path.join(__dirname, 'public')));
  // app.use(express.static('public'));

  // app.use(express.static(__dirname + '/public'));