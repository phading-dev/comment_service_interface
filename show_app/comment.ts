import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from '@phading/user_service_interface/third_person/account';

export enum Liking {
  NEUTRAL = 1,
  LIKE = 2,
  DISLIKE = 3,
}

export let LIKING: EnumDescriptor<Liking> = {
  name: 'Liking',
  values: [
    {
      name: 'NEUTRAL',
      value: 1,
    },
    {
      name: 'LIKE',
      value: 2,
    },
    {
      name: 'DISLIKE',
      value: 3,
    },
  ]
}

export interface Comment {
  commentId?: string,
  content?: string,
/* Timestamp in milliseconds of the video. */
  timestamp?: number,
  author?: AccountSnapshot,
/* Whether the author is the publisher of the show. */
  isThePublisher?: boolean,
  liking?: Liking,
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
    {
      name: 'liking',
      enumType: LIKING,
    },
  ]
};
