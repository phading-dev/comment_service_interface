import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Comment {
  commentId?: string,
  authorId?: string,
  content?: string,
  pinTimestampMs?: number,
}

export let COMMENT: MessageDescriptor<Comment> = {
  name: 'Comment',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'authorId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'content',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pinTimestampMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
