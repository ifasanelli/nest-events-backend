import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common"

@Controller('/events')
export class EventsController {
  @Get()
  findAll() { }
  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }
  @Post()
  create(@Body() input) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return id;
  }
  @Delete(':id')
  remove(@Param('id') id) {
    return id;
  }
}