import { UserEntity } from '../../../../../domain/entities/user.entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUsersQuery } from './get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  async execute(query: GetUsersQuery): Promise<GetUsersQuery[]> {
    console.log(query);
    return await this.userRepo.find();
  }
}
