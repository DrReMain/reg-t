const chalk = require('chalk');

module.exports = () => {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split('.');
  const major = semver[0];

  if (major - '10' < 0) {
    console.log(
      chalk.red.bold(
        `你当前使用的 nodejs 版本(${currentNodeVersion})过低。
请使用 v10.x 或以上版本。
`,
      ),
    );
    return true;
  }

  return false;
};
