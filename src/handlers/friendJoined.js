// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { userProfileSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { FriendJoinedEmailEvent } from '../types';

export const friendJoined = async (event: FriendJoinedEmailEvent) => {
  const { emails, friend } = event.body;
  const [err, result] = await to(mailer.sendFriendJoinedEmail(emails, friend));
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

export const handler = middy(friendJoined)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: userProfileSchema }))
  .use(httpJsonErrorHandler());
