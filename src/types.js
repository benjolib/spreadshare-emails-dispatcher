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

  sendDigestEmail(email: string | Array<string>, digest: Digest): Promise<void>;

  sendWelcomeEmail(email: string, name: string): Promise<void>;
}

type Frequency = 'daily' | 'weekly' | 'monthly';

export type Person = {
  name: string,
  fullName: string,
  imageLink?: string
};

export type Stream = {
  name: string,
  link: string
};

type Column = {
  text: string,
  link?: string
};

type Post = {
  columns: Array<Column>,
  votesCount: number,
  commentsCount: number,
  imageLink: string,
  contributor: Person
};

export type UserProfile = Person & {
  tagline: string,
  followLink: string
};

export type CommentInfo = {
  person: Person,
  stream: Stream,
  replyLink: string,
  comment: string
};

export type Digest = {
  frequency: Frequency,
  name: string,
  link: string,
  digest: Array<Post>
};

// mail types
export type EmailContent = {
  from: string,
  to: Array<string> | string,
  subject: string,
  html?: string,
  text?: string
};

export type MailgunOptions = {
  api_key: string,
  domain: string,
  from: string
};

// http event types
export type Context = {
  requestId: string
};

export type RenderHtmlEvent = {
  pathParameters: {
    type: string
  }
};

export type TestEmailEvent = {
  body: {
    email: string,
    greeting?: string
  }
};

export type FriendJoinedEmailEvent = {
  body: {
    emails: Array<string> | string,
    friend: UserProfile
  }
};

export type CommentEmailEvent = {
  body: {
    emails: Array<string> | string,
    commentInfo: CommentInfo
  }
};

export type DigestEvent = {
  context: Context,
  body: {
    emails: Array<string> | string,
    digest: Digest
  }
};

export type WelcomeEmailEvent = {
  body: {
    email: string,
    name: string
  }
};
