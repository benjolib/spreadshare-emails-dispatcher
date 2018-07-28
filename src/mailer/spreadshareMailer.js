// @flow

import fs from 'fs';
import util from 'util';
import path from 'path';
import handlebars from 'handlebars';
import envelopes from './envelopes';
import letter from './letter';
import type {
  SpreadshareMailerI,
  MailerI,
  SubscriptionDigest,
  UserProfile,
  CommentInfo
} from '../types';

export default class SpreadshareMailer implements SpreadshareMailerI {
  mailer: MailerI;

  constructor(mailer: MailerI) {
    this.mailer = mailer;
  }

  sendTestMail(email: string, greeting: string): Promise<void> {
    const envelope = envelopes.TestEmail(email);
    const content = {
      ...envelope,
      html: letter('test', { greeting })
    };
    return this.mailer.sendMail(content);
  }

  async sendFriendJoinedEmail(
    email: string | Array<string>,
    friendInfo: UserProfile
  ): Promise<void> {
    const envelope = envelopes.FriendJoined(email, friendInfo);
    const content = {
      ...envelope,
      html: await getLetter('FriendJoined', { friend: friendInfo })
    };

    return this.mailer.sendMail(content);
  }

  sendCommentEmail(
    email: string | Array<string>,
    commentInfo: CommentInfo
  ): Promise<void> {
    const envelope = envelopes.Comment(email, commentInfo);
    const content = {
      ...envelope,
      html: letter('newComment', commentInfo)
    };

    return this.mailer.sendMail(content);
  }

  async sendSubscriptionDigest(
    email: string | Array<string>,
    digest: SubscriptionDigest
  ): Promise<void> {
    const envelope = envelopes.SubscriptionDigest(email, digest);
    const content = {
      ...envelope,
      html: await getLetter('SubscriptionDigest', { digest })
    };

    return this.mailer.sendMail(content);
  }
}

const envelopeCache: { [string]: (any) => string } = {};
const readFile = util.promisify(fs.readFile);

const getLetter = (templateName, data): Promise<string> => {
  if (envelopeCache[templateName]) {
    return Promise.resolve(envelopeCache[templateName](data));
  }

  return readFile(
    path.join('./templates', `${templateName}.hbs`),
    'utf-8'
  ).then(text => {
    const template = handlebars.compile(text);
    envelopeCache[templateName] = template;
    return template(data);
  });
};
