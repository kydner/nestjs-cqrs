import { TypeOrmModule } from '@nestjs/typeorm';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from 'src/controller/user.controller';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserHandler } from 'src/application/handlers/user/commands/create/create-user.handler';
import { GetUsersHandler } from 'src/application/handlers/user/queries/getAll/get-users.handler';
import { GetUserHandler } from 'src/application/handlers/user/queries/getOne/get-user.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [CreateUserHandler, GetUsersHandler, GetUserHandler],
})
export class UserModule {}
