import parse from 'url-parse';
import express from 'express';

const app = express();

app.get('*', (req, res) => {
  const {name = 'you'} = parse(req.url, true).query;
  res.end(`Hello ${name}!`);
});

export default app;
