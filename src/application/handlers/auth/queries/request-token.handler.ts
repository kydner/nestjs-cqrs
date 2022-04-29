import { RequestTokenQuery } from './request-token.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AuthRepository } from 'src/application/repositories/auth.repository';

@QueryHandler(RequestTokenQuery)
export class RequestTokenHandler implements IQueryHandler<RequestTokenQuery> {
  constructor(readonly authRepo: AuthRepository) {}
  execute(query: RequestTokenQuery): Promise<any> {
    return this.authRepo.validateUser(query.username, query.password);
  }
}
