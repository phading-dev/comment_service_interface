import { ListCommentsRequestBody, LIST_COMMENTS, ListCommentsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class ListCommentsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListCommentsRequestBody,
    authStr: string,
  ): Promise<ListCommentsResponse>;
}
