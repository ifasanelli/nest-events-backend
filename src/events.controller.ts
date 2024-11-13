import { Controller, Get, Post, Patch, Delete, Param } from "@nestjs/common"

@Controller('/events')
export class EventsController {
  @Get()
  findAll() { }
  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }
  @Post()
  create() { }
  @Patch(':id')
  update(@Param('id') id) {
    return id;
  }
  @Delete(':id')
  remove(@Param('id') id) {
    return id;
  }
}