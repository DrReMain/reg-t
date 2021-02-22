const path = require('path');

module.exports = (p) => {
  return path.join(process.cwd(), p);
};
