import { PostCommentRequestBody, PostCommentResponse, POST_COMMENT, GetCommentsRequestBody, GetCommentsResponse, GET_COMMENTS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function postComment(
  client: WebClientInterface,
  body: PostCommentRequestBody,
  options?: WebClientOptions,
): Promise<PostCommentResponse> {
  return client.send(
    {
      descriptor: POST_COMMENT,
      body,
    },
    options,
  );
}

export function getComments(
  client: WebClientInterface,
  body: GetCommentsRequestBody,
  options?: WebClientOptions,
): Promise<GetCommentsResponse> {
  return client.send(
    {
      descriptor: GET_COMMENTS,
      body,
    },
    options,
  );
}
