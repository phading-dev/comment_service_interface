import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { Comment, COMMENT, Liking, LIKING } from '../comment';

export interface PostCommentRequestBody {
  showId?: string,
  content?: string,
  timestamp?: number,
}

export let POST_COMMENT_REQUEST_BODY: MessageDescriptor<PostCommentRequestBody> = {
  name: 'PostCommentRequestBody',
  fields: [
    {
      name: 'showId',
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
}

export let POST_COMMENT_RESPONSE: MessageDescriptor<PostCommentResponse> = {
  name: 'PostCommentResponse',
  fields: [
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
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: POST_COMMENT_RESPONSE,
  },
}

export interface ListPostedCommentsRequestBody {
}

export let LIST_POSTED_COMMENTS_REQUEST_BODY: MessageDescriptor<ListPostedCommentsRequestBody> = {
  name: 'ListPostedCommentsRequestBody',
  fields: [
  ]
};

export interface ListPostedCommentsResponse {
  comments?: Array<Comment>,
}

export let LIST_POSTED_COMMENTS_RESPONSE: MessageDescriptor<ListPostedCommentsResponse> = {
  name: 'ListPostedCommentsResponse',
  fields: [
    {
      name: 'comments',
      messageType: COMMENT,
      isArray: true,
    },
  ]
};

export let LIST_POSTED_COMMENTS: ServiceDescriptor = {
  name: "ListPostedComments",
  path: "/ListPostedComments",
  body: {
    messageType: LIST_POSTED_COMMENTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_POSTED_COMMENTS_RESPONSE,
  },
}

export interface GetCommentsRequestBody {
  showId?: string,
}

export let GET_COMMENTS_REQUEST_BODY: MessageDescriptor<GetCommentsRequestBody> = {
  name: 'GetCommentsRequestBody',
  fields: [
    {
      name: 'showId',
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
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_COMMENTS_RESPONSE,
  },
}

export interface LikeCommentRequestBody {
  commentId?: string,
  liking?: Liking,
}

export let LIKE_COMMENT_REQUEST_BODY: MessageDescriptor<LikeCommentRequestBody> = {
  name: 'LikeCommentRequestBody',
  fields: [
    {
      name: 'commentId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'liking',
      enumType: LIKING,
    },
  ]
};

export interface LikeCommentResponse {
}

export let LIKE_COMMENT_RESPONSE: MessageDescriptor<LikeCommentResponse> = {
  name: 'LikeCommentResponse',
  fields: [
  ]
};

export let LIKE_COMMENT: ServiceDescriptor = {
  name: "LikeComment",
  path: "/LikeComment",
  body: {
    messageType: LIKE_COMMENT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIKE_COMMENT_RESPONSE,
  },
}
