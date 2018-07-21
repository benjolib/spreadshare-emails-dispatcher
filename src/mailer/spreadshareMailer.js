// @flow

import fs from 'fs';
import util from 'util';
import path from 'path';
import handlebars from 'handlebars';
import envelopes from './envelopes';
import type {
  SpreadshareMailerI,
  MailerI,
  SubscriptionDigest,
  UserProfile
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
      html: await getLetter('TestEmail', { greeting })
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

  sendSubscriptionDigest(update: SubscriptionDigest): Promise<void> {
    const content = {
      from: this.from,
      to: update.emails,
      subject: 'Yet to be decided!',
      html: JSON.stringify(update.publication)
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
