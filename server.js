const express = require('express')
const morgan = require('morgan')
const path = require('path')
const logFormat = require('./server/util/logFormat')
const { ENVIRONMENT } = require('./server/constants')

const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || ENVIRONMENT.DEVELOPMENT

require('dotenv').config({ path: path.join(__dirname, 'server', `.env.${env}`) })

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
if (env === ENVIRONMENT.DEVELOPMENT) app.use(morgan(logFormat))

app.get('/ping', (req, res) =>{
  res.json({ pong: true })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `[${env}] Starting server on port ${port}.`)
})
