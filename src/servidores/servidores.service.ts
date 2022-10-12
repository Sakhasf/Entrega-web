import { HttpException, HttpStatus, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Web } from 'src/Web/entities/web.entity';
import { Repository } from 'typeorm';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { Servidor } from './entities/servidor.entity';

@Injectable()
export class ServidoresService {
  constructor(
    @InjectRepository(Servidor)
    private serversRepo: Repository<Servidor>,
    ){}

  create(server: CreateServidorDto): Promise<Servidor> {
    return this.serversRepo.save(server);
  }

  findAll(): Promise<Servidor[]> {
    return this.serversRepo.find({
      relations: {
        webs:true,
    }});
  }

  async findOne(id: number): Promise<Servidor> {
    let theOne = await this.serversRepo.findOneBy({id});
    if (theOne!= null){
      return theOne;
    } else{
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updatedServer: UpdateServidorDto): Promise<Servidor> {
    if (typeof(await this.findOne(id)) === 'string'){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    } else{
    this.serversRepo.update(id,updatedServer);
    return this.serversRepo.findOneBy({id});
    }
  }

  remove(id: number) : Promise<Servidor> {
    let thePoorOne = this.findOne(id);
    if (typeof(thePoorOne) === 'string' ){
      throw  new HttpException('Not found', HttpStatus.NOT_FOUND);
    } else 
    this.serversRepo.delete(id);
    return thePoorOne;
  }
}
