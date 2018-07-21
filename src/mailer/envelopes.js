// @flow
import type { EnvelopeFactory } from './types';

const defaultFromAddress = 'subscriptions@spreadshare.co';

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
  })
};

export default envelopes;
