// @flow
import type { EnvelopeFactory } from './types';

const defaultFromAddress = process.env.FROM_EMAIL || 'emails@spreadshare.co';
const toEmail = process.env.TO_EMAIL || 'users@spreadshare.co';
const frequencyToTextMap = {
  daily: 'Today',
  weekly: 'This Week',
  monthly: 'This Month'
};

const envelopes: { [string]: EnvelopeFactory } = {
  TestEmail: (to, _, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    subject: 'Spreadshare test email!'
  }),
  FriendJoined: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    // $FlowIgnore
    subject: `${content.name} Joined Spreadshare`
  }),
  NewFollower: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    // $FlowIgnore
    subject: `${content.name} started following you`
  }),
  NewSubscriber: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    // $FlowIgnore
    subject: `${content.subscriber.name} subscribed your stream ${
      // $FlowIgnore
      content.stream.name
    }`
  }),
  Comment: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    // $FlowIgnore
    subject: `${content.person.name} added a comment to ${content.stream.name}`
  }),
  Digest: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    // $FlowIgnore
    subject: `${frequencyToTextMap[content.frequency]} in ${
      // $FlowIgnore
      content.name
    }`
  }),
  WelcomeEmail: (to, _, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to: toEmail,
    bcc: to,
    subject: 'Welcome to Spreadshare'
  })
};

export default envelopes;
