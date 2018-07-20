// @flow

import MailgunMailer from '../mailgunMailer';

const apiKey = process.env.MAILGUN_API_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || '';
const from = process.env.FROM_EMAIL || '';

const mailgunOptions = {
  api_key: apiKey,
  domain,
  from
};

export const mailer = new MailgunMailer(mailgunOptions);
