require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3100;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.all('/*', (req, res) => {
  const { method, params, body } = req;
  const url = `http://www.boredapi.com/api${req.url}`;
  axios({
    url,
    method,
    params,
    data: body,
    headers: { Authorization: `${process.env.GITHUB_APIKEY}` },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`BRd listening on port ${port}`);
});
