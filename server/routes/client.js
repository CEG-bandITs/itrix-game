const express = require('express')
const router = express.Router()
const path = require('path')
const logger = require('../logger')

router.get('/', (req, res) => {
  logger.info(
    `received GET / Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/game', (req, res) => {
  logger.info(
    `received GET /game Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/leaderboard', (req, res) => {
  logger.info(
    `received GET /leaderboard Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/rules', (req, res) => {
  logger.info(
    `received GET /rules Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/login', (req, res) => {
  logger.info(
    `received GET /login Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/register', (req, res) => {
  logger.info(
    `received GET /register Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html'),
  )
})

router.get('/static/*', (req, res) => {
  logger.info(
    `received GET ${req.path} Request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }`,
  )
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', req.path))
})

module.exports = router
