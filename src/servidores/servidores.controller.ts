import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';

@Controller('servidores')
export class ServidoresController {
  constructor(private readonly servidoresService: ServidoresService) {}

  @Post()
  create(@Body() createServidorDto: CreateServidorDto) {
    return this.servidoresService.create(createServidorDto);
  }

  @Get()
  findAll() {
    return this.servidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServidorDto: UpdateServidorDto) {
    return this.servidoresService.update(+id, updateServidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servidoresService.remove(+id);
  }
}
