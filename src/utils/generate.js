const path = require('path');
const fs = require('fs');
const findPath = require('./findPath');

const VAR = /__name__/g;

module.exports = (typeConf, typeTemplatesPath, names, customPath) => {
  const stat = fs.statSync(typeTemplatesPath);
  const output = findPath(customPath || typeConf.output);

  // 单文件
  if (stat.isFile()) {
    names.forEach((_) => {
      let codeString = fs.readFileSync(typeTemplatesPath, 'utf-8');
      codeString = codeString.replace(VAR, _);

      if (output) {
        fs.mkdirSync(output, { recursive: true });
        fs.writeFileSync(path.join(output, path.basename(typeTemplatesPath).replace(VAR, _)), codeString, {
          encoding: 'utf-8',
        });
      }
    });
  }

  // 目录
  if (stat.isDirectory()) {
    const files = fs.readdirSync(typeTemplatesPath);

    names.forEach((_) => {
      files.forEach((__) => {
        const fileName = __.replace(VAR, _);
        let codeString = fs.readFileSync(path.join(typeTemplatesPath, __), 'utf-8');
        codeString = codeString.replace(VAR, _);

        if (output) {
          const targetPath = path.join(output, _);
          fs.mkdirSync(targetPath, { recursive: true });
          fs.writeFileSync(path.join(targetPath, fileName), codeString, { encoding: 'utf-8' });
        }
      });
    });
  }
};
