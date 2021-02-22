const fs = require('fs');
const chalk = require('chalk');
const findPath = require('./findPath');

const FILE_NAME = 'reg-t.config';
const FILE_NAME_JS = `${FILE_NAME}.js`;
const FILE_NAME_JSON = `${FILE_NAME}.json`;

module.exports = () => {
  const filePathJs = findPath(FILE_NAME_JS);
  const filePathJson = findPath(FILE_NAME_JSON);

  if (fs.existsSync(filePathJs)) return require(filePathJs);
  if (fs.existsSync(filePathJson)) return require(filePathJson);

  console.log(
    chalk.red(`
  在项目根目录下没有找到配置文件: ${chalk.bold(FILE_NAME_JS)} 或 ${chalk.bold(FILE_NAME_JSON)}
    `),
  );
};
