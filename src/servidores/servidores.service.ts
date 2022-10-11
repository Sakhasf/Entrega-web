import { Injectable } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';

@Injectable()
export class ServidoresService {
  create(createServidorDto: CreateServidorDto) {
    return 'This action adds a new servidore';
  }

  findAll() {
    return `This action returns all servidores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servidore`;
  }

  update(id: number, updateServidorDto: UpdateServidorDto) {
    return `This action updates a #${id} servidore`;
  }

  remove(id: number) {
    return `This action removes a #${id} servidore`;
  }
}
