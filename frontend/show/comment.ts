import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface Comment {
  commentId?: string,
  content?: string,
  /* Timestamp of the video. */
  timestampMs?: number,
  author?: AccountSnapshot,
  /* Whether the author is the publisher of the show. */
  isThePublisher?: boolean,
}

export let COMMENT: MessageDescriptor<Comment> = {
  name: 'Comment',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'content',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'timestampMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'author',
    index: 4,
    messageType: ACCOUNT_SNAPSHOT,
  }, {
    name: 'isThePublisher',
    index: 5,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};
