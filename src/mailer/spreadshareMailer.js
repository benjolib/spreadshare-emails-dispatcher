// @flow

import envelopes from './envelopes';
import letter from './letter';
import type {
  SpreadshareMailerI,
  MailerI,
  UserProfile,
  CommentInfo,
  Digest
} from '../types';

const welcomeEmailText = (name: string) => `Hi ${name},

Thank you for joining! Btw, any topic you’re most interested in keeping track? Just let me know and we‘ll get it on Spreadshare next.

- Ben`;

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

  async sendNewFollowerEmail(
    email: string | Array<string>,
    follower: UserProfile
  ): Promise<void> {
    const envelope = envelopes.NewFollower(email, follower);
    const content = {
      ...envelope,
      html: await getLetter('newFollower', follower)
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
    digest: Digest
  ): Promise<void> {
    const envelope = envelopes.Digest(email, digest);
    const content = {
      ...envelope,
      html: await getLetter('digest', digest)
    };

    return this.mailer.sendMail(content);
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    const envelope = envelopes.WelcomeEmail(email);
    const content = {
      ...envelope,
      text: welcomeEmailText(name)
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
