// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { testEmailSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { TestEmailEvent } from '../types';

export const testEmail = async (event: TestEmailEvent) => {
  const [err, result] = await to(mailer.sendTestMail(event.body.email));
  if (err) {
    console.log('got an error: ', err);
    return { statusCode: 500, err: err.message };
  }
  console.log('body: ', result);
  return {
    statusCode: 200,
    result: JSON.stringify({
      status: 'Success'
    })
  };
};

export const handler = middy(testEmail)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: testEmailSchema }))
  .use(httpJsonErrorHandler());
