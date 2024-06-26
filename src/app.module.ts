import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ItemsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
