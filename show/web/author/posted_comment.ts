import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PostedComment {
  seasonId?: string,
  episodeId?: string,
  commentId?: string,
  content?: string,
  pinTimestampMs?: number,
  postedTimeMs?: number,
}

export let POSTED_COMMENT: MessageDescriptor<PostedComment> = {
  name: 'PostedComment',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'commentId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'content',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pinTimestampMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'postedTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
