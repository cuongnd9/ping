const express = require('express');
const cron = require('node-cron');
const axios = require('axios');
const fs = require('fs');
const signale = require('signale');

const app = express();

cron.schedule('*/30 8-23 * * *', () => {
  const data = fs.readFileSync('./domains.json', 'utf8');
  const domains = JSON.parse(data);
  domains.forEach(domain =>
    axios
      .get(domain, { timeout: 10000 })
      .then(res =>
        signale.watch(domain, res.data)
      )
      .catch(signale.error)
  );
});

app.get('/', (_, res) => res.send('Xin chào 👋'));

app.listen(9000, () => signale.debug('Server is running on port 9000'));
