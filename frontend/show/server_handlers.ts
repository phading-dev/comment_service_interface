import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { POST_COMMENT, PostCommentRequestBody, PostCommentResponse, GET_COMMENTS, GetCommentsRequestBody, GetCommentsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class PostCommentHandlerInterface implements ServiceHandlerInterface {
  public descriptor = POST_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: PostCommentRequestBody,
    auth: ClientSession,
  ): Promise<PostCommentResponse>;
}

export abstract class GetCommentsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: GetCommentsRequestBody,
  ): Promise<GetCommentsResponse>;
}
