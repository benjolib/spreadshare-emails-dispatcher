// @flow
import type { EnvelopeFactory } from './types';

const defaultFromAddress = process.env.FROM_EMAIL || 'emails@spreadshare.co';
const toEmail = process.env.TO_EMAIL || 'users@spreadshare.co';
const frequencyToTextMap = {
  daily: 'Today',
  weekly: 'This Week',
  monthly: 'This Month'
};

type Address = {
  to: string,
  bcc?: Array<string>
};

const address = (to: string | Array<string>): Address => {
  if (!Array.isArray(to) || to.length === 1) {
    return {
      // eslint-disable-next-line
      to
    };
  }
  return {
    to: toEmail,
    bcc: to
  };
};

const envelopes: { [string]: EnvelopeFactory } = {
  TestEmail: (to, _, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    subject: 'Spreadshare test email!'
  }),
  FriendJoined: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${content.name} Joined Spreadshare`
  }),
  NewFollower: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${content.name} started following you`
  }),
  NewSubscriber: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${content.subscriber.name} subscribed your stream ${
      // $FlowIgnore
      content.stream.name
    }`
  }),
  Comment: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${content.person.name} added a comment to ${content.stream.name}`
  }),
  Digest: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${frequencyToTextMap[content.frequency]} in ${
      // $FlowIgnore
      content.name
    }`
  }),
  Welcome: (to, _, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    subject: 'Welcome to Spreadshare'
  }),
  NewStream: (to, content, from) => ({
    from: `"Spreadshare" <${from || defaultFromAddress}>`,
    ...address(to),
    // $FlowIgnore
    subject: `${content.creator.name} published ${content.stream.name}`
  })
};

export default envelopes;
