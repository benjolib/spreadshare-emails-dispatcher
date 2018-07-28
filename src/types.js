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

  sendCommentEmail(
    email: string | Array<string>,
    commentInfo: CommentInfo
  ): Promise<void>;

  sendSubscriptionDigest(
    email: string | Array<string>,
    digest: SubscriptionDigest
  ): Promise<void>;
}

export type Person = {
  name: string,
  fullName: string,
  imageLink: string
};

export type Stream = {
  name: string,
  link: string
};

export type CommentInfo = {
  person: Person,
  stream: Stream,
  replyLink: string,
  comment: string
};

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
  addedBy: string,
  fields: string,
  description: string
};

type Publication = {
  title: string,
  description: string,
  posts: Array<Post>
};

export type SubscriptionDigest = {
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

export type RenderHtmlEvent = {
  pathParameters: {
    type: string
  }
};

export type FriendJoinedEmailEvent = {
  body: {
    emails: Array<string> | string,
    friend: UserProfile
  }
};

export type Context = {
  requestId: string
};

export type SubscriptionDigestEvent = {
  context: Context,
  body: {
    emails: Array<string> | string,
    digest: SubscriptionDigest
  }
};

export type CommentEmailEvent = {
  body: {
    emails: Array<string> | string,
    commentInfo: CommentInfo
  }
};
