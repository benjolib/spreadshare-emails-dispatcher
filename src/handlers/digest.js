// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { digestSchema } from '../schemas';
import { mailer } from './factory';
import type { DigestEvent } from '../types';

export const handler = async (event: DigestEvent) => {
  console.log('Invoked subscriptionDigest');
  console.log(event);
  const { context } = event;
  const { emails, digest } = event.body;
  console.log(emails);
  console.log(digest);
  console.log(context);
  const [err, result] = await to(mailer.sendDigestEmail(emails, digest));
  if (err) {
    console.log('got an error: ', err);
    return { statusCode: 500, err: err.message };
  }
  console.log('email client response: ', result);
};

// export const handler = middy(digestHandler)
//   .use(jsonBodyParser())
//   .use(validator({ inputSchema: digestSchema }));
