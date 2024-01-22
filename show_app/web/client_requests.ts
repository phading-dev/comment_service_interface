import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { PostCommentRequestBody, PostCommentResponse, POST_COMMENT, ListPostedCommentsRequestBody, ListPostedCommentsResponse, LIST_POSTED_COMMENTS, GetCommentsRequestBody, GetCommentsResponse, GET_COMMENTS, LikeCommentRequestBody, LikeCommentResponse, LIKE_COMMENT } from './interface';

export function postComment(
  client: WebServiceClientInterface,
  body: PostCommentRequestBody,
): Promise<PostCommentResponse> {
  return client.send({
    descriptor: POST_COMMENT,
    body,
  });
}

export function listPostedComments(
  client: WebServiceClientInterface,
  body: ListPostedCommentsRequestBody,
): Promise<ListPostedCommentsResponse> {
  return client.send({
    descriptor: LIST_POSTED_COMMENTS,
    body,
  });
}

export function getComments(
  client: WebServiceClientInterface,
  body: GetCommentsRequestBody,
): Promise<GetCommentsResponse> {
  return client.send({
    descriptor: GET_COMMENTS,
    body,
  });
}

export function likeComment(
  client: WebServiceClientInterface,
  body: LikeCommentRequestBody,
): Promise<LikeCommentResponse> {
  return client.send({
    descriptor: LIKE_COMMENT,
    body,
  });
}
