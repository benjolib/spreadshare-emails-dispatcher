// @flow

import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import type { MailerI, MailgunOptions, EmailContent } from '../types';

export default class MailgunMailer implements MailerI {
  mailer: MailerI;

  constructor(options: MailgunOptions) {
    this.mailer = nodemailer.createTransport(mg({ auth: options }));
  }

  sendMail(content: EmailContent): Promise<void> {
    return this.mailer.sendMail(content);
  }
}
