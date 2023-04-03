import userRouter from '../routes/user.js';
import { notFound, errHandler } from '../middlewares/errHandler.js';

const initRoutes = (app) => {
  app.use('/api/user', userRouter);

  app.use(notFound);
  app.use(errHandler);
};

export default initRoutes;
