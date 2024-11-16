import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'example',
    database: 'nest-events',
    entities: [Event],
    synchronize: true // automatically updates the database schema when the entities are changed, do not commit it
  })],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
