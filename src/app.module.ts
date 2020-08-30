import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "192.168.99.100",
      port: 5431,
      username: "root",
      password: "root",
      database: "nestjsrealworld",
      synchronize: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')]
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
