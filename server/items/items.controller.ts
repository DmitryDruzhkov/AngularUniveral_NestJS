import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/items/item.entity';
import { Repository } from 'typeorm/index';

class Item {
  name: string;
  age: number;
  address: string;
}

@Controller('items')
export class ItemsController {

  constructor(@InjectRepository(ItemEntity)
              private readonly itemsRepository: Repository<ItemEntity>) { // Подключили репозиторий
  }

  @Get()
  getAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  @Post()
  create(@Body() newItem: Item): Promise<Item> {
    const item = this.itemsRepository.create(newItem);
    return this.itemsRepository.save(item);
  }
}
