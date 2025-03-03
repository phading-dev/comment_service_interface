import { PostCommentRequestBody, POST_COMMENT, PostCommentResponse, DeleteCommentRequestBody, DELETE_COMMENT, DeleteCommentResponse, ListPostedCommentsRequestBody, LIST_POSTED_COMMENTS, ListPostedCommentsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class PostCommentHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = POST_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: PostCommentRequestBody,
    authStr: string,
  ): Promise<PostCommentResponse>;
}

export abstract class DeleteCommentHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteCommentRequestBody,
    authStr: string,
  ): Promise<DeleteCommentResponse>;
}

export abstract class ListPostedCommentsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_POSTED_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPostedCommentsRequestBody,
    authStr: string,
  ): Promise<ListPostedCommentsResponse>;
}
