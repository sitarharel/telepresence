const express = require('express')
const app = express()

var robot_controls = {
  right: 0,
  left: 0
}

app.get('/robot/controls', (req, res) => res.send(JSON.stringify(robot_controls)))

app.listen(3000, () => console.log('Running on port 3000!'))