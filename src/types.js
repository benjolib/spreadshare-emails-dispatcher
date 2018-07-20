// @flow

export interface MailerI {
  sendTestMail(email: string): Promise<void>;
  sendSubscriptionDigest(update: SubscriptionDigest): Promise<void>;
}

export interface NodeMailerI {
  sendMail(content: EmailContent): Promise<void>;
}

type EmailContent = {
  from: string,
  to: Array<string> | string,
  subject: string,
  html: string
};

export type MailgunOptions = {
  api_key: string,
  domain: string,
  from: string
};

type Frequency = 'daily' | 'weekly' | 'monthly';

type Post = {
  title: string,
  description: string
};

type Publication = {
  title: string,
  description: string,
  posts: Array<Post>
};

export type SubscriptionDigest = {
  emails: Array<string>,
  frequency: Frequency,
  publication: Publication
};

// http types
export type TestEmailEvent = {
  body: {
    email: string
  }
};

export type SubscriptionDigestEvent = {
  body: SubscriptionDigest
};
