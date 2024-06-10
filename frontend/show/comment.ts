import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface AccountSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface Comment {
  commentId?: string,
  content?: string,
/* Timestamp in milliseconds of the video. */
  timestamp?: number,
  author?: AccountSnapshot,
/* Whether the author is the publisher of the show. */
  isThePublisher?: boolean,
}

export let COMMENT: MessageDescriptor<Comment> = {
  name: 'Comment',
  fields: [
    {
      name: 'commentId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'content',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'timestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'author',
      messageType: ACCOUNT_SNAPSHOT,
    },
    {
      name: 'isThePublisher',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};
