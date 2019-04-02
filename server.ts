import * as http from 'http';

const port = process.env.PORT || 3000;

const requestHandler = (request: http.IncomingMessage, response: http.ServerResponse): void => {
  response.end('Hello World!');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
