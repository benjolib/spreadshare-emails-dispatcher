// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import { subscriptionDigestSchema } from '../schemas';
import type { SubscriptionDigestEvent } from '../types';

export const subscriptionDigest = async (event: SubscriptionDigestEvent) => {
  const { emails, digest } = event.body;
  const [err, result] = await to(mailer.sendSubscriptionDigest(emails, digest));
  if (err) {
    console.log('got an error: ', err);
    return { statusCode: 500, err: err.message };
  }
  console.log('email client response: ', result);
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'Success'
    })
  };
};

export const handler = middy(subscriptionDigest)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: subscriptionDigestSchema }))
  .use(httpJsonErrorHandler());
