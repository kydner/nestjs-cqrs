import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepo.findOne({
      where: {
        username,
      },
    });
    if (user && user.password === password) return this.login(user);
    return null;
  }

  async login(user: UserEntity) {
    const payload = {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
    };
    return this.jwtService.sign(payload);
  }
}
