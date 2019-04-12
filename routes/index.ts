import express from 'express';

import name from './name';

const app = express();

app.use('/name', name);
app.get('*', (_, res) => res.end('Hello World!'));

export default app;
