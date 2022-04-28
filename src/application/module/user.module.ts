import { GetUserQueryHandler } from './../handlers/user/queries/getOne/get-user-query.handler';
import { UserEntity } from './../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserHandler } from './../handlers/user/commands/create/create-user.handler';
import { UserController } from './../../web/controller/user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUsersQueryHandler } from '../handlers/user/queries/getAll/get-users-query.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [CreateUserHandler, GetUsersQueryHandler, GetUserQueryHandler],
})
export class UserModule {}
