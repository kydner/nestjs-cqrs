import { GetUserQuery } from 'src/application/handlers/user/queries/getOne/get-user.query';
import { UserEntity } from '../../../../../domain/entities/user.entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  async execute(query: GetUserQuery): Promise<GetUserQuery> {
    return this.userRepo.findOneOrFail(query.id);
  }
}
