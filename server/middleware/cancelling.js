const userAgentValidator = (req, res, next) => {
  if (req.get('User-Agent') === '') {
    res.send()
  } else next()
}

module.exports = userAgentValidator
