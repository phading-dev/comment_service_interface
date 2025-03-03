import { ListCommentsRequestBody, ListCommentsResponse, LIST_COMMENTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newListCommentsRequest(
  body: ListCommentsRequestBody,
): ClientRequestInterface<ListCommentsResponse> {
  return {
    descriptor: LIST_COMMENTS,
    body,
  };
}
