import { HttpException, HttpStatus, Injectable, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebDTO } from './dtos/create-web-dto';
import { ModifyWebDto } from './dtos/update-web-dto';
import { Web } from './entities/web.entity';

@Injectable()
export class WebService {
  constructor(
    @InjectRepository(Web)
    private websRepo: Repository<Web>,
    ){}


  findAll(): Promise<Web[]> {
    return this.websRepo.find({
      relations: {
        servidor:true,
      }
    });
  }

  create(web:WebDTO | Web): Promise<Web>{ // que pueda atajar el DTO o la entidad en caso de que se cargue a que servidor pertenece
    return this.websRepo.save(web);
  }

  async findOne(id: number) {  // hay que ser uso de async y await para que se resuelva la promesa de la web en la comparacion
    let theOne = await this.websRepo.findOneBy({id}); //FindOneBy encuentra la primera entidad que coincida con el parametro, si no encuentra devuelve null
    if (theOne != null){  // Si no es null, devuelve la web
      return theOne;
    } else{  // caso contrario no existe la id especificada
      throw new HttpException('No existe web con la id especificada', HttpStatus.NOT_FOUND);
    }
  }
  
  async modify(id: number, webModificada : ModifyWebDto | Web) : Promise<Web> {
    if(typeof(await this.findOne(id)) === 'string' ){ // Controlo que exista la web a modificar (update no controla que exista la entidad)  
      throw new HttpException('No existe web con la id especificada', HttpStatus.BAD_REQUEST); //si no existe tiro un 404
    } else {  // para controlar que exista la id del sv a la que pertenece, necesito "liberarme" del tipo parcial de WebDTO
    this.websRepo.update(id, webModificada);  //updatea en el repositorio la web con la id del parametro con los datos que vienen en webModificada
    return this.websRepo.findOneBy({id}); // devuelve la web modificada buscandola en el repositorio (problemas guardando en una variable el resultado del update en el repo)
    } 
      //throw new HttpException('No existe servidor con la id especificada', HttpStatus.BAD_REQUEST);
  }

  erase(id: number) : Promise<Web> {
    let thePoorOne = this.findOne(id);
    if (typeof(thePoorOne) === 'string' ){
      throw  new HttpException('No existe web con la id especificada', HttpStatus.NOT_FOUND);
    } else 
    this.websRepo.delete(id);
    return thePoorOne;
  }
  } 