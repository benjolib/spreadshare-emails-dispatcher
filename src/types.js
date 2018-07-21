// @flow

export interface MailerI {
  sendMail(content: EmailContent): Promise<void>;
}

export interface SpreadshareMailerI {
  sendTestMail(email: string, greeting: string): Promise<void>;
  sendFriendJoinedEmail(
    email: string | Array<string>,
    friendInfo: UserProfile
  ): Promise<void>;
  sendSubscriptionDigest(update: SubscriptionDigest): Promise<void>;
}

export type UserProfile = {
  name: string,
  fullName: string,
  tagLine: string,
  followLink: string,
  imageLink: string
};

export type EmailContent = {
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
    email: string,
    greeting?: string
  }
};

export type FriendJoinedEmailEvent = {
  body: {
    email: Array<string> | string,
    friend: UserProfile
  }
};

export type SubscriptionDigestEvent = {
  body: SubscriptionDigest
};
