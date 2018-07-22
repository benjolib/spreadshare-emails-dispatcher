// @flow

export type EnvelopeFactory = (
  to: Array<string> | string,
  subjectContent: ?any,
  from: ?string
) => Envelope;

export type Envelope = {
  from: string,
  to: Array<string> | string,
  subject: string
};