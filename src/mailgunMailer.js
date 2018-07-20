// @flow

import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import type {
  MailerI,
  MailgunOptions,
  NodeMailerI,
  SubscriptionDigest
} from './types';

export default class MailgunMailer implements MailerI {
  mailer: NodeMailerI;

  from: string;

  constructor(options: MailgunOptions) {
    this.mailer = nodemailer.createTransport(mg({ auth: options }));
    this.from = options.from;
  }

  sendTestMail(email: string): Promise<void> {
    const content = {
      from: this.from,
      to: email,
      subject: 'Spreadshare test email!',
      html: '<b>Hi, from spreadshare</b>'
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
