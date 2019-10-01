const express = require('express');

const app = express();

app.get('/', (_, res) => res.send('Xin chào 👋'))

app.listen(9000, () => console.log('Server is running on port 9000'));
