import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from '@phading/user_service_interface/third_person/account';

export interface Comment {
  commentId?: string,
  content?: string,
/* Timestamp in seconds of the video. */
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
