// @flow

import to from 'await-to-js';
import middy from 'middy';
import { jsonBodyParser, validator } from 'middy/middlewares';
import { mailer } from './factory';
import { commentSchema } from '../schemas';
import httpJsonErrorHandler from '../middlewares/httpJsonErrorHandler';
import type { CommentEmailEvent } from '../types';
import { errorRes } from '../utils/http';

const comment = async (event: CommentEmailEvent) => {
  const { emails, commentInfo } = event.body;
  const [err, result] = await to(mailer.sendCommentEmail(emails, commentInfo));
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

export const handler = middy(comment)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: commentSchema }))
  .use(httpJsonErrorHandler());
