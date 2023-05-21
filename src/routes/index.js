import about from './about';
import distance from './distance';

const routes = ({ app }) => {
  app.use('/', about);
  app.use('/distance', distance);
};

export default routes;
