// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { subscriberSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { NewSubscriberEmailEvent } from '../types';
import { errorRes } from '../utils/http';

export const newSubscriber = async (event: NewSubscriberEmailEvent) => {
  const { emails, subscription } = event.body;
  const [err, result] = await to(
    mailer.sendNewSubscriberEmail(emails, subscription)
  );
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

export const handler = middy(newSubscriber)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: subscriberSchema }))
  .use(httpJsonErrorHandler());
