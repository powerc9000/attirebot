var config = {};
config.port = process.argv[2] || 3000;
config.sessionSecret = "your session secret";
module.exports = config;