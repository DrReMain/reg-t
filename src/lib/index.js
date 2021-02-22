const fs = require('fs');
const chalk = require('chalk');
const findConfByType = require('../utils/findConfByType');
const findPath = require('../utils/findPath');
const generate = require('../utils/generate');

module.exports = ({ _: names, type, path }, config) => {
  const typeConf = findConfByType(config, type);
  const typeTemplatesPath = findPath(typeConf.path);

  if (fs.existsSync(typeTemplatesPath)) {
    generate(typeConf, typeTemplatesPath, names, path);
  } else {
    console.log(chalk.red(`${type}类型的模板不存在，请检查 'template['${type}'].path'是否配置正确`));
  }
};
