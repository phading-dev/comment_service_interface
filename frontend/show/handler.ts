import { PostCommentRequestBody, POST_COMMENT, PostCommentResponse, GetCommentsRequestBody, GET_COMMENTS, GetCommentsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class PostCommentHandlerInterface implements WebHandlerInterface {
  public descriptor = POST_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: PostCommentRequestBody,
    auth: ClientSession,
  ): Promise<PostCommentResponse>;
}

export abstract class GetCommentsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: GetCommentsRequestBody,
  ): Promise<GetCommentsResponse>;
}
