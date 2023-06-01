const concurrently = require('concurrently');
const { allMarkets } = require('../paths');

concurrently(
  allMarkets.map((market) => ({
    command: 'yarn build:prod',
    name: market.toUpperCase() || 'ROOT',
    env: { MARKET: market }
  })),
  {
    prefix: 'name',
    killOthers: ['failure'],
    maxProcesses: 3
  }
).then(
  () => process.exit(0),
  () => process.exit(1)
);
