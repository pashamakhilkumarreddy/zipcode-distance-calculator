import dotenv from 'dotenv';
import development from './development';
import staging from './staging';
import production from './production';

dotenv.config();

const configMap = {
  development,
  staging,
  production,
};

export const { ZIPCODE_URL, ZIPCODE_API_KEY } = process.env;

export const ENV = process.env.NODE_ENV || 'development';

export const APP_NAME = process.env.APP_NAME || 'Node Microservice Harness';

export const config = { ...configMap[ENV], ZIPCODE_API_KEY, APP_NAME };

export default { ...configMap[ENV], ZIPCODE_API_KEY, APP_NAME };
