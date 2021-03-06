import { TypeOrmModule } from '@nestjs/typeorm';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from 'src/web/controller/user.controller';
import { UserEntity } from 'src/domain/entities/user.entity';
import { CreateUserHandler } from 'src/application/handlers/user/commands/create/create-user.handler';
import { GetUsersHandler } from 'src/application/handlers/user/queries/getAll/get-users.handler';
import { GetUserHandler } from 'src/application/handlers/user/queries/getOne/get-user.handler';
import { GetUsernameHandler } from '../handlers/user/queries/getUsername/get-username.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserHandler,
    GetUsersHandler,
    GetUserHandler,
    GetUsernameHandler,
  ],
})
export class UserModule {}
