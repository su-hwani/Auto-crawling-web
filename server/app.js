const customerDB = require('./DB/customerDB');

//app.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log("Hello World!");
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/auth/exists',(req,res)=>{
  console.log("/exists", req.query);
  var id = req.query.id;
  
  const sqlquery = "select(id)";
  
  const result = customerDB.select(id);
  console.log(result);
  res.send(result);
})

app.post('/auth/signin',(req,res) => {
  console.log("SignIn Logs : /signin", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var ph = req.body.ph;

  const sqlquery = "insert (id, pw, ph)";

  const result = customerDB.insert(id,pw,ph);

  console.log(result);
  res.send(result);

})

app.get('/auth/login',(req,res)=>{
  console.log("/login", req.query);
  var id = req.query.id;
  
  const sqlquery = "select(id, pw)";
  
  const result = customerDB.select(id);
  
  res.send(result);
})