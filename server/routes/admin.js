const express = require('express')
const router = express.Router()
const config = require('config-reloadable')

router.get('/', (req, res) => {
  if (
    req.headers.auth ===
    '7D75691AA87DE59F389E012E43E65749BE83337B2BBF503E0D2396DA1C094AE7'
  ) {
    console.log('Reloaded')
    res.json({ msg: 'Done' })
    config.reloadConfigs()
  } else res.status(404).send('<pre>Cannot GET /admin/reload/<pre>')
})

module.exports = router
