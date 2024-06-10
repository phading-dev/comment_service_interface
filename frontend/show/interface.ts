import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Comment, COMMENT } from './comment';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface PostCommentRequestBody {
  episodeId?: string,
  content?: string,
/* Timestamp in milliseconds of the video. */
  timestamp?: number,
}

export let POST_COMMENT_REQUEST_BODY: MessageDescriptor<PostCommentRequestBody> = {
  name: 'PostCommentRequestBody',
  fields: [
    {
      name: 'episodeId',
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
  ]
};

export interface PostCommentResponse {
  comment?: Comment,
}

export let POST_COMMENT_RESPONSE: MessageDescriptor<PostCommentResponse> = {
  name: 'PostCommentResponse',
  fields: [
    {
      name: 'comment',
      messageType: COMMENT,
    },
  ]
};

export let POST_COMMENT: ServiceDescriptor = {
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

export interface GetCommentsRequestBody {
  episodeId?: string,
}

export let GET_COMMENTS_REQUEST_BODY: MessageDescriptor<GetCommentsRequestBody> = {
  name: 'GetCommentsRequestBody',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetCommentsResponse {
  comments?: Array<Comment>,
}

export let GET_COMMENTS_RESPONSE: MessageDescriptor<GetCommentsResponse> = {
  name: 'GetCommentsResponse',
  fields: [
    {
      name: 'comments',
      messageType: COMMENT,
      isArray: true,
    },
  ]
};

export let GET_COMMENTS: ServiceDescriptor = {
  name: "GetComments",
  path: "/GetComments",
  body: {
    messageType: GET_COMMENTS_REQUEST_BODY,
  },
  response: {
    messageType: GET_COMMENTS_RESPONSE,
  },
}
