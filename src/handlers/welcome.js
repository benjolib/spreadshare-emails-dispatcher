// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { welcomeEmailSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { WelcomeEmailEvent } from '../types';
import { errorRes } from '../utils/http';

const welcomeEmail = async (event: WelcomeEmailEvent) => {
  const { email, name } = event.body;
  const [err, result] = await to(mailer.sendWelcomeEmail(email, name));
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

export const handler = middy(welcomeEmail)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: welcomeEmailSchema }))
  .use(httpJsonErrorHandler());
