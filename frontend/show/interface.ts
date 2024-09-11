import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Comment, COMMENT } from './comment';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface PostCommentRequestBody {
  episodeId?: string,
  content?: string,
  /* Timestamp of the video. */
  timestampMs?: number,
}

export let POST_COMMENT_REQUEST_BODY: MessageDescriptor<PostCommentRequestBody> = {
  name: 'PostCommentRequestBody',
  fields: [{
    name: 'episodeId',
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
  }],
};

export interface PostCommentResponse {
  comment?: Comment,
}

export let POST_COMMENT_RESPONSE: MessageDescriptor<PostCommentResponse> = {
  name: 'PostCommentResponse',
  fields: [{
    name: 'comment',
    index: 1,
    messageType: COMMENT,
  }],
};

export interface GetCommentsRequestBody {
  episodeId?: string,
}

export let GET_COMMENTS_REQUEST_BODY: MessageDescriptor<GetCommentsRequestBody> = {
  name: 'GetCommentsRequestBody',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetCommentsResponse {
  comments?: Array<Comment>,
}

export let GET_COMMENTS_RESPONSE: MessageDescriptor<GetCommentsResponse> = {
  name: 'GetCommentsResponse',
  fields: [{
    name: 'comments',
    index: 1,
    messageType: COMMENT,
    isArray: true,
  }],
};

export let POST_COMMENT: WebRemoteCallDescriptor = {
  name: "PostComment",
  path: "/PostComment",
  body: {
    messageType: POST_COMMENT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: POST_COMMENT_RESPONSE,
  },
}

export let GET_COMMENTS: WebRemoteCallDescriptor = {
  name: "GetComments",
  path: "/GetComments",
  body: {
    messageType: GET_COMMENTS_REQUEST_BODY,
  },
  response: {
    messageType: GET_COMMENTS_RESPONSE,
  },
}
