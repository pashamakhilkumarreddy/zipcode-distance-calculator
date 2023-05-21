import express from 'express';
import { config } from './config';
import routes from './routes';

const app = express();

const { APP_NAME, PORT, HOST } = config;

app.use('/health-check', (req, res) => {
  res.send({
    status: 200,
    messages: [`Application ${APP_NAME} is running on ${HOST}:${PORT}`],
  });
});

routes({ app });

app.listen(PORT, HOST, () => {
  console.info(`The server is up and running on ${HOST}:${PORT}`);
});
