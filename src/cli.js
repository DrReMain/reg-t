const yargs = require('yargs/yargs');
const version = require('./utils/version');
const getConfig = require('./utils/getConfig');
const pkg = require('../package.json');

if (version()) process.exit(1);

const config = getConfig();
if (!config) process.exit(1);

const c = yargs(process.argv.slice(2))
  .usage('Usage: $0 [name] [OPTIONS]')
  .command('[name]', '生成名为 name 的模板')
  .options({
    type: {
      alias: 't',
      desc: '生成模板的类型',
      type: 'string',
      required: false,
    },
    path: {
      alias: 'p',
      desc: '生成模板的路径',
      type: 'string',
      required: false,
    },
  })
  .help('help')
  .alias('help', 'h')
  .version('version', pkg.version)
  .alias('version', 'v')
  .example('reg-t Doge', '根据配置文件生成名为Doge的模板').argv;

require('./lib')(c, config);
