import { RequestTokenQuery } from './../../application/handlers/auth/queries/request-token.query';
import { QueryBus } from '@nestjs/cqrs';
import { LocalAuthGuard } from './../../application/auth/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, UseGuards, Post, Body } from '@nestjs/common';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly queryBus: QueryBus) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req: RequestTokenQuery) {
    return this.queryBus.execute(req);
  }
}
