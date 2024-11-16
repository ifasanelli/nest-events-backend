import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode } from "@nestjs/common"
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Event } from "./event.entity";
import { ILike, MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('/events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get('/practice')
  async practice() {
    // https://typeorm.io/find-options
    return await this.repository.find({
      select: ['id', 'when'],
      where: [{
        id: MoreThan(3),
        when: MoreThan(new Date('2021-02-12T13:00:00'))
      }, {
        description: ILike('%meet%')
      }],
      take: 2,
      skip: 2,
      order: {
        id: 'DESC'
      }
    }); // SELECT id, when FROM event WHERE (event.id > 3 AND event.when > '2021-02-12T13:00:00') OR event.description ILIKE '%meet%' ORDER BY event.id DESC LIMIT 2 OFFSET 2
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.repository.findOneBy({ id: id });
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when)
    });
  };

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOneBy({ id: id });

    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ?
        new Date(input.when) : event.when
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const event = await this.repository.findOneBy({ id: id });

    return await this.repository.remove(event);
  }
}