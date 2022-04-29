import { UserEntity } from 'src/domain/entities/user.entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUsernameQuery } from './get-username.query';
import { Repository } from 'typeorm';

@QueryHandler(GetUsernameQuery)
export class GetUsernameHandler implements IQueryHandler<GetUsernameQuery> {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  execute(query: GetUsernameQuery): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: {
        username: query.username,
      },
    });
  }
}
