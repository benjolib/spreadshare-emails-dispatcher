// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { testEmailSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { TestEmailEvent } from '../types';
import { errorRes } from '../utils/http';

export const testEmail = async (event: TestEmailEvent) => {
  const { email, greeting } = event.body;
  const [err, result] = await to(mailer.sendTestMail(email, greeting || 'Hi'));
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

export const handler = middy(testEmail)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: testEmailSchema }))
  .use(httpJsonErrorHandler());
