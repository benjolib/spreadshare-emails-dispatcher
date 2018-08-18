// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { userProfileSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { UserProfileEmailEvent } from '../types';
import { errorRes } from '../utils/http';

const newFollower = async (event: UserProfileEmailEvent) => {
  const { emails, person } = event.body;
  const [err, result] = await to(mailer.sendNewFollowerEmail(emails, person));
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

export const handler = middy(newFollower)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: userProfileSchema }))
  .use(httpJsonErrorHandler());
