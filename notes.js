const chalk = require('chalk');

const getnotes = () => {
  return chalk.bgBlueBright.white.bold('Your notes...');
};

module.exports = getnotes;
