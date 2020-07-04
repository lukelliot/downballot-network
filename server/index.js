const express = require('express')
const morgan = require('morgan')
const path = require('path')
const logFormat = require('./util/logFormat')

const app = express()
const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') app.use(morgan(logFormat))

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) =>
  res.json({ pong: true })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `[${ENV}] Starting server on port ${PORT}.`)
})
