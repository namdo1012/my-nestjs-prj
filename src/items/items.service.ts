import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items = [];

  findAll(): any[] {
    return this.items;
  }

  create(item): void {
    this.items.push(item);
  }

  update(id: number, itemUpdate): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = itemUpdate;
    }
  }

  delete(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
