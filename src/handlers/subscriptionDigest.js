// @flow

import to from 'await-to-js';
import { mailer } from './factory';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import { subscriptionDigestSchema } from '../schemas';
import type { SubscriptionDigestEvent } from '../types';

export const handler = async (event: SubscriptionDigestEvent) => {
  console.log('Invoked subscriptionDigest');
  console.log(event);
  const { emails, digest } = event.body;
  console.log(emails);
  console.log(digest);
  // const [err, result] = await to(mailer.sendSubscriptionDigest(emails, digest));
  // if (err) {
  //   console.log('got an error: ', err);
  //   return { statusCode: 500, err: err.message };
  // }
  // console.log('email client response: ', result);
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'Success'
    })
  };
};
