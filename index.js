const express = require('express');
const cron = require('cron');

const app = express();
const { CronJob } = cron;

const job = new CronJob('0 */29 9-1 * * *', () => {
  console.log('ping..........');
});

job.start();

app.get('/', (_, res) => res.send('Xin chào 👋'));

app.listen(9000, () => console.log('Server is running on port 9000'));
