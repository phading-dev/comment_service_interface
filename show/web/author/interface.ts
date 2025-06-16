import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Comment, COMMENT } from '../comment';
import { PostedComment, POSTED_COMMENT } from './posted_comment';
import { COMMENT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface PostCommentRequestBody {
  seasonId?: string,
  episodeId?: string,
  content?: string,
  pinnedVideoTimeMs?: number,
}

export let POST_COMMENT_REQUEST_BODY: MessageDescriptor<PostCommentRequestBody> = {
  name: 'PostCommentRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'content',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pinnedVideoTimeMs',
    index: 4,
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

export interface DeleteCommentRequestBody {
  commentId?: string,
}

export let DELETE_COMMENT_REQUEST_BODY: MessageDescriptor<DeleteCommentRequestBody> = {
  name: 'DeleteCommentRequestBody',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteCommentResponse {
}

export let DELETE_COMMENT_RESPONSE: MessageDescriptor<DeleteCommentResponse> = {
  name: 'DeleteCommentResponse',
  fields: [],
};

export interface ListPostedCommentsRequestBody {
  limit?: number,
  postedTimeCursor?: number,
}

export let LIST_POSTED_COMMENTS_REQUEST_BODY: MessageDescriptor<ListPostedCommentsRequestBody> = {
  name: 'ListPostedCommentsRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'postedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListPostedCommentsResponse {
  comments?: Array<PostedComment>,
  postedTimeCursor?: number,
}

export let LIST_POSTED_COMMENTS_RESPONSE: MessageDescriptor<ListPostedCommentsResponse> = {
  name: 'ListPostedCommentsResponse',
  fields: [{
    name: 'comments',
    index: 1,
    messageType: POSTED_COMMENT,
    isArray: true,
  }, {
    name: 'postedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let POST_COMMENT: RemoteCallDescriptor = {
  name: "PostComment",
  service: COMMENT_WEB_SERVICE,
  path: "/sa/PostComment",
  body: {
    messageType: POST_COMMENT_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: POST_COMMENT_RESPONSE,
  },
}

export let DELETE_COMMENT: RemoteCallDescriptor = {
  name: "DeleteComment",
  service: COMMENT_WEB_SERVICE,
  path: "/sa/DeleteComment",
  body: {
    messageType: DELETE_COMMENT_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_COMMENT_RESPONSE,
  },
}

export let LIST_POSTED_COMMENTS: RemoteCallDescriptor = {
  name: "ListPostedComments",
  service: COMMENT_WEB_SERVICE,
  path: "/sa/ListPostedComments",
  body: {
    messageType: LIST_POSTED_COMMENTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_POSTED_COMMENTS_RESPONSE,
  },
}
