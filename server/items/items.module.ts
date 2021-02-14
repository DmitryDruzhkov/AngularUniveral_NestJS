import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/items/item.entity';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity])
  ],
  controllers: [ItemsController]
})
export class ItemsModule {}
