var express = require('express')
var multer  = require('multer')
var upload = multer()
const accepts = require('accepts')

var app = express()

app.get('/', function (req, res) {
  res.send(`
    <form action="/upload"
      enctype="multipart/form-data" method="post">
      <p>
      Please specify a file:<br>
      <input type="file" name="datafile" size="40">
      </p>
      <div>
      <input type="submit" value="Send">
      </div>
      </form>
    `);
});

app.post('/upload', upload.single('datafile'), function (req, res, next) {
  res.send('{ "size": '+ req.file.size + " }")
  // console.log(req.file.size)
  // req.body will hold the text fields, if there were any
})

app.listen(3000, function (err) {
  if (err) return console.log('Error'), process.exit(1);

  console.log('started at 3000');
})
