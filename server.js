var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jeff', function (req, res) {
  res.send('Hello Jeff!');
});

app.get('/courtney', function (req, res) {
  res.send('Hello Courtney!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
