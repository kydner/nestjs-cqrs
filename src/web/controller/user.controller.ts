import { JwtAuthGuard } from './../../application/auth/jwt-auth.guard';
import { GetUserQuery } from 'src/application/handlers/user/queries/getOne/get-user.query';
import { GetUsersQuery } from '../../application/handlers/user/queries/getAll/get-users.query';
import { CreateUserCommand } from '../../application/handlers/user/commands/create/create-user.command';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return await this.queryBus.execute(new GetUsersQuery());
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.queryBus.execute(new GetUserQuery(id));
  }

  @Post()
  @HttpCode(201)
  async Create(@Body() user: CreateUserCommand) {
    return await this.commandBus.execute(user);
  }
}
