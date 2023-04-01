const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

// Set the view engine to handlebars
app.set('view engine', 'hbs');

// Set the path to the views directory
app.set('views', __dirname + '/views');

// Register the partials directory
hbs.registerPartials(__dirname + '/views/partials');

// Set the public directory to serve static files
app.use(express.static(__dirname + '/public'));

// Set up routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/audio', (req, res) => {
  res.render('audio');
});

app.get('/video', (req, res) => {
  res.render('video');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
