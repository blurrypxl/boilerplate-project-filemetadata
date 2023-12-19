var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer')
const analyse = multer({ dest: '/analyse' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/analyse', analyse.single('upfile'), function (req, res, next) {
  const file = req.file.upfile
  res.file(file)
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
