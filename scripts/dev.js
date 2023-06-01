const concurrently = require('concurrently');
const MARKET = process.argv[2] && /^[a-z]{2}$/.test(process.argv[2]) ? process.argv[2] : '';
const webpackArgs = MARKET ? process.argv.slice(3) : process.argv.slice(2);

concurrently(
  [
    {
      command: `yarn start:dev ${webpackArgs.join(' ')}`,
      name: (MARKET || 'default').toUpperCase(),
      env: { MARKET }
    }
  ],
  {
    prefix: 'name'
  }
).then(
  () => process.exit(0),
  () => process.exit(1)
);
