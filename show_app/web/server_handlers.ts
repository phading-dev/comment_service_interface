import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { POST_COMMENT, PostCommentRequestBody, PostCommentResponse, LIST_POSTED_COMMENTS, ListPostedCommentsRequestBody, ListPostedCommentsResponse, GET_COMMENTS, GetCommentsRequestBody, GetCommentsResponse, GET_COMMENT_LIKING, GetCommentLikingRequestBody, GetCommentLikingResponse, LIKE_COMMENT, LikeCommentRequestBody, LikeCommentResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class PostCommentHandlerInterface implements ServiceHandlerInterface {
  public descriptor = POST_COMMENT;
  public abstract handle(
    requestId: string,
    body: PostCommentRequestBody,
    auth: WebClientSession,
  ): Promise<PostCommentResponse>;
}

export abstract class ListPostedCommentsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_POSTED_COMMENTS;
  public abstract handle(
    requestId: string,
    body: ListPostedCommentsRequestBody,
    auth: WebClientSession,
  ): Promise<ListPostedCommentsResponse>;
}

export abstract class GetCommentsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_COMMENTS;
  public abstract handle(
    requestId: string,
    body: GetCommentsRequestBody,
    auth: WebClientSession,
  ): Promise<GetCommentsResponse>;
}

export abstract class GetCommentLikingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_COMMENT_LIKING;
  public abstract handle(
    requestId: string,
    body: GetCommentLikingRequestBody,
    auth: WebClientSession,
  ): Promise<GetCommentLikingResponse>;
}

export abstract class LikeCommentHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIKE_COMMENT;
  public abstract handle(
    requestId: string,
    body: LikeCommentRequestBody,
    auth: WebClientSession,
  ): Promise<LikeCommentResponse>;
}
