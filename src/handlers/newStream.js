// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { newStreamSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { NewStreamEmailEvent } from '../types';
import { errorRes } from '../utils/http';

export const newStream = async (event: NewStreamEmailEvent) => {
  const { emails, data } = event.body;
  const [err, result] = await to(mailer.sendNewStreamEmail(emails, data));
  if (err) {
    console.log('error: ', err);
    return errorRes(500, err.message);
  }
  console.log('mailGunRes: ', result);
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'Success'
    })
  };
};

export const handler = middy(newStream)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: newStreamSchema }))
  .use(httpJsonErrorHandler());
