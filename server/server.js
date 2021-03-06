const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var robot_controls = {
  right: 0,
  left: 0
}

app.get('/robot/controls', (req, res) => res.send(JSON.stringify(robot_controls)))

app.post('/robot/controls', (req, res) => {
  robot_controls.left = req.body.left;
  robot_controls.right = req.body.right;
  res.sendStatus(200);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('Running on port 3000!'))
