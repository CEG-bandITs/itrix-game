const { createLogger, format, transports } = require('winston')

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    format.printf(
      (info) => `${[info.timestamp]} ${info.level} : ${info.message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'day1.log', level: 'info' }),
    new transports.File({ filename: 'day_errors.log', level: 'error' }),
  ],
})

module.exports = logger
