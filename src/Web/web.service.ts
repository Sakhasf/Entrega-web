import { HttpException, HttpStatus, Injectable, Query } from '@nestjs/common';
import { Web } from './web.interface';

@Injectable()
export class WebService {
  private webs: Web[] = [{
    id: 1,
    consumoCPU: 200,
    consumoRAM: 3000,
    consumoGPU: 1000,
    consumoHDD: 2500,
    version: 2.0
  },
  {
    id: 2,
    consumoCPU: 300,
    consumoRAM: 4500,
    consumoGPU: 2000,
    consumoHDD: 5000,
    version: 1.0
  } ];

  findAll(): Web[] {
    console.log(this.webs);
    return this.webs;
  }
  create(web:Web){
    this.webs.push(web);
    return web;
  }

  findOne(id: number) {
    let theOne = this.webs.filter(web => web.id == id); //filter crea una copia del elemento que coincide con las condiciones especificadas
    if (theOne.length != 0){  // Si el arreglo copiado tiene longitud > 0 existe la id
      return theOne;
    } else{  // caso contrario no existe la id especificada
      throw new HttpException('Not found', HttpStatus.NOT_FOUND) //return 'no existe web con el id especificado';
    }
  }
  
  modify(id: number, webModificada : Web) : Web {
    let web = this.webs.find(web => web.id == id);
    web.consumoCPU = webModificada.consumoCPU;
    web.consumoGPU = webModificada.consumoGPU;
    web.consumoHDD = webModificada.consumoHDD;
    web.consumoRAM = webModificada.consumoRAM;
    web.version = webModificada.version;
    return web;
  }
  
  erase(id: number) : string {
    let webParaRemover = this.webs.find(web => web.id == id);
    let pos = this.webs.indexOf(webParaRemover);  //indexOf te devuelve el indice de la primera ocurrencia
    if (pos === -1){                             // del valor en el arreglo, de no encontrarla devuelve -1
      throw new HttpException('Not found', HttpStatus.NOT_FOUND) //return 'No existe web con el id especificado';
    }
    this.webs.splice(pos,1);  // splice elimina a partir de la posición inicial, x posiciones en un arreglo
    return 'La web fue borrada correctamente';
  }
  } 
