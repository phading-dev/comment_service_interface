import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Comment, COMMENT } from '../comment';
import { COMMENT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ListCommentsRequestBody {
  seasonId?: string,
  episodeId?: string,
  limit?: number,
  pinTimeCursor?: number,
}

export let LIST_COMMENTS_REQUEST_BODY: MessageDescriptor<ListCommentsRequestBody> = {
  name: 'ListCommentsRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'pinTimeCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListCommentsResponse {
  comments?: Array<Comment>,
  pinTimeCursor?: number,
}

export let LIST_COMMENTS_RESPONSE: MessageDescriptor<ListCommentsResponse> = {
  name: 'ListCommentsResponse',
  fields: [{
    name: 'comments',
    index: 1,
    messageType: COMMENT,
    isArray: true,
  }, {
    name: 'pinTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let LIST_COMMENTS: RemoteCallDescriptor = {
  name: "ListComments",
  service: COMMENT_WEB_SERVICE,
  path: "/ListComments",
  body: {
    messageType: LIST_COMMENTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_COMMENTS_RESPONSE,
  },
}
