import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  name: string;
  description?: string;
}

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: 1, name: 'Item One', description: 'This is the first item' },
    { id: 2, name: 'Item Two', description: 'This is the second item' },
    { id: 3, name: 'Item Three', description: 'This is the third item' },
  ];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): void {
    this.items.push(item);
  }

  update(id: number, itemUpdate: Partial<Item>): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      // Merge existing item with updates
      this.items[itemIndex] = { ...this.items[itemIndex], ...itemUpdate };
    }
  }

  delete(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
