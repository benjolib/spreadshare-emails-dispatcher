// @flow

export type EnvelopeFactory = (
  to: Array<string> | string,
  subjectContent: ?any,
  from: ?string
) => Envelope;

export type Envelope = {
  from: string,
  to: string,
  bcc?: Array<string>,
  subject: string
};
