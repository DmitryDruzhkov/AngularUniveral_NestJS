import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/angular-habr-nestjs/browser')
    }),
    TypeOrmModule.forRoot({ // Конфиг подключения к базе
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ItemsModule
  ],
})
export class AppModule {}
