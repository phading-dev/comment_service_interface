import { PostCommentRequestBody, PostCommentResponse, POST_COMMENT, DeleteCommentRequestBody, DeleteCommentResponse, DELETE_COMMENT, ListPostedCommentsRequestBody, ListPostedCommentsResponse, LIST_POSTED_COMMENTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newPostCommentRequest(
  body: PostCommentRequestBody,
): ClientRequestInterface<PostCommentResponse> {
  return {
    descriptor: POST_COMMENT,
    body,
  };
}

export function newDeleteCommentRequest(
  body: DeleteCommentRequestBody,
): ClientRequestInterface<DeleteCommentResponse> {
  return {
    descriptor: DELETE_COMMENT,
    body,
  };
}

export function newListPostedCommentsRequest(
  body: ListPostedCommentsRequestBody,
): ClientRequestInterface<ListPostedCommentsResponse> {
  return {
    descriptor: LIST_POSTED_COMMENTS,
    body,
  };
}
