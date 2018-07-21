// @flow

import SpreadshareMailer from '../mailer/spreadshareMailer';
import MailgunMailer from '../mailer/mailgunMailer';

const apiKey = process.env.MAILGUN_API_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || '';
const from = process.env.FROM_EMAIL || '';

const mailgunOptions = {
  api_key: apiKey,
  domain,
  from
};

const mailClient = new MailgunMailer(mailgunOptions);
export const mailer = new SpreadshareMailer(mailClient);
