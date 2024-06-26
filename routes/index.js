var express = require('express');
var router = express.Router();

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;

/*

var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

// GET messages. 
router.get('/new', function(req, res, next) {
  res.render('form')
});

// POST messages. 
router.post('/new', function(req, res, next) {
  const { messageText, messageUser } = req.body; // Extracting values from req.body
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/')
});

module.exports = router;

*/