import { config } from '../config';
import { INTERNAL_SERVER_ERROR } from '../utils/constants';

const { HOST, PORT, APP_NAME } = config;

export const about = (_, res) => {
  try {
    const info = {
      message: `Application ${APP_NAME} is running on ${HOST}:${PORT}`,
    };
    res.send({
      status: 200,
      messages: [info],
    });
  } catch (err) {
    res.send({
      status: 500,
      errors: [
        {
          message: INTERNAL_SERVER_ERROR,
        },
      ],
    });
  }
};
