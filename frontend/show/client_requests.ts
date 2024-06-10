import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { PostCommentRequestBody, PostCommentResponse, POST_COMMENT, GetCommentsRequestBody, GetCommentsResponse, GET_COMMENTS } from './interface';

export function postComment(
  client: WebServiceClientInterface,
  body: PostCommentRequestBody,
): Promise<PostCommentResponse> {
  return client.send({
    descriptor: POST_COMMENT,
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
