const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())

server.use(express.json())

server.get('/', (req, res) => res.send('<h1>Backend Server Running</h1>'))
