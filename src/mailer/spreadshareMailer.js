// @flow

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

  async sendTestMail(email: string, greeting: string): Promise<void> {
    const envelope = envelopes.TestEmail(email);
    const content = {
      ...envelope,
      html: await getLetter('test', { greeting })
    };
    return this.mailer.sendMail(content);
  }

  async sendFriendJoinedEmail(
    email: string | Array<string>,
    friend: UserProfile
  ): Promise<void> {
    const envelope = envelopes.FriendJoined(email, friend);
    const content = {
      ...envelope,
      html: await getLetter('friendJoined', friend)
    };

    return this.mailer.sendMail(content);
  }

  async sendCommentEmail(
    email: string | Array<string>,
    commentInfo: CommentInfo
  ): Promise<void> {
    const envelope = envelopes.Comment(email, commentInfo);
    const content = {
      ...envelope,
      html: await getLetter('newComment', commentInfo)
    };

    return this.mailer.sendMail(content);
  }

  async sendDigestEmail(
    email: string | Array<string>,
    digest: SubscriptionDigest
  ): Promise<void> {
    const envelope = envelopes.Digest(email, digest);
    const content = {
      ...envelope,
      html: await getLetter('digest', digest)
    };

    return this.mailer.sendMail(content);
  }
}

const getLetter = (templateName, data): Promise<string> => {
  let html = null;
  try {
    html = letter(templateName, data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(html);
};
