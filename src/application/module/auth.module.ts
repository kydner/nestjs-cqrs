import { LocalStrategy } from './../auth/local.strategy';
import { UserEntity } from 'src/domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from 'src/application/repositories/auth.repository';
import { RequestTokenHandler } from './../handlers/auth/queries/request-token.handler';
import { authConstants } from './../auth/auth.constant';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './../../web/controller/auth.controller';
import { UserModule } from './user.module';
import { CqrsModule } from '@nestjs/cqrs';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserModule,
    PassportModule,
    PassportModule,
    JwtModule.register({
      secret: authConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [RequestTokenHandler, AuthRepository, LocalStrategy],
})
export class AuthModule {}
