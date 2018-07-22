// @flow
import type { EnvelopeFactory } from './types';

const defaultFromAddress = process.env.FROM_EMAIL || 'emails@spreadshare.co';
const frequencyToTextMap = {
  daily: 'Today',
  weekly: 'This Week',
  monthly: 'This Month'
};

const envelopes: { [string]: EnvelopeFactory } = {
  TestEmail: (to, _, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to,
    subject: 'Spreadshare test email!'
  }),
  FriendJoined: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to,
    // $FlowIgnore
    subject: `${content.name} Joined Spreadshare`
  }),
  Comment: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to,
    // $FlowIgnore
    subject: `${content.personName} added a comment to ${content.streamName}`
  }),
  SubscriptionDigest: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    to,
    // $FlowIgnore
    subject: `${frequencyToTextMap[content.frequency]} in ${
      // $FlowIgnore
      content.publication.title
    }`
  })
};

export default envelopes;
