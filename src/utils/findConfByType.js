const chalk = require('chalk');

module.exports = (config, type) => {
  if (type) {
    if (!config.template[type]) {
      console.log(chalk.red(`(${type})类型的配置不存在，使用default配置`));
      return config.template.default;
    }
    return config.template[type];
  }
  return config.template.default;
};
