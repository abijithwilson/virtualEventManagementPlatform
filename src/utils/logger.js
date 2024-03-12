const { format, transports, createLogger } = require("winston");

const customFormat = format.combine(
  format.colourize({ all: true }),
  format.timestamp({ format: "YY-MM-DD HH:mm:ss" }),
  format.printf((info) => {
    return `[${info.level}] [${info.time}]: ${info.message}`;
  })
);

const logConfiguration = {
  transports: [new transports.Console()],
  format: format.combine(format.colorize(), customFormat),
};

const logger = createLogger(logConfiguration);
module.exports = logger;
