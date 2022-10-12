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
    return this.websRepo.find({  // retorna todas las webs que encuentre  y de tenerla, su relacion con el servidor
      relations: {
        servidor:true,
      }
    });
  }

  create(web:WebDTO | Web): Promise<Web>{ // guarda la web en el repo
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
  
  async modify(id: number, webModificada : ModifyWebDto | Web) : Promise<Web> { // Modifica una web con los datos recibidos en el body y retorna la misma después de su modifiación
    if(typeof(await this.findOne(id)) === 'string' ){ // Controlo que exista la web a modificar (update no controla que exista la entidad)  
      throw new HttpException('No existe web con la id especificada', HttpStatus.BAD_REQUEST); //si no existe tiro un 400 bad request
    } else {  // para controlar que exista la id del sv a la que pertenece, necesito "liberarme" del tipo parcial de WebDTO
    this.websRepo.update(id, webModificada);  //updatea en el repositorio la web con la id del parametro con los datos que vienen en webModificada
    return this.websRepo.findOneBy({id}); // devuelve la web modificada buscandola en el repositorio (problemas guardando en una variable el resultado del update en el repo)
    } 
      //throw new HttpException('No existe servidor con la id especificada', HttpStatus.BAD_REQUEST);
  }

  erase(id: number) : Promise<Web> { 
    let thePoorOne = this.findOne(id);
    if (typeof(thePoorOne) === 'string' ){ //si findOne(id) me retorna una salida tipo string, se que tiro la excepcion asi que hago lo propio 
      throw  new HttpException('No existe web con la id especificada', HttpStatus.NOT_FOUND);
    } else 
    this.websRepo.delete(id); 
    return thePoorOne; // Devuelve una copia de la web que fue borrada si no hubo una HttpException
  }
  } 