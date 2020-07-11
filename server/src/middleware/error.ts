import { Request, Response, NextFunction } from 'express';

module.exports = function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.status(500).json({ error: 'Something failed' });
};
