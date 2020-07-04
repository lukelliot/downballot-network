const express = require('express');
// const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

app.use(morgan(':method :url :status [:response-time ms] [:date[clf]] '))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) =>
  res.json({ pong: true })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', `Starting server on port ${PORT}`)
})
