import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  const message = testEnvironmentVariable;
  return res.status(200).json({ message });
});

export default indexRouter;
