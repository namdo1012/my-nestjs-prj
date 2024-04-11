import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() item) {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() itemUpdate) {
    this.itemsService.update(id, itemUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.itemsService.delete(id);
  }
}
