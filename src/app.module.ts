import { join } from 'path';
import { AuthModule } from './application/module/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './application/module/user.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Black fire 1989',
      database: 'cqrs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
