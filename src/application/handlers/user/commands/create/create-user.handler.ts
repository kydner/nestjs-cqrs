import { CreateUserCommand } from './create-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserEntity } from 'src/domain/entities/user.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  async execute(command: CreateUserCommand) {
    const user = new CreateUserCommand();
    user.firstName = command.firstName;
    user.lastName = command.lastName;
    user.password = command.password;
    user.username = command.username;
    user.email = command.email;
    await this.userRepo.insert(user);
  }
}
