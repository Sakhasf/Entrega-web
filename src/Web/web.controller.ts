import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Web } from './web.interface';
import { WebService } from './web.service';

@Controller('webs')
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Get()  //GetAll 
  getWebs(): Web[] {
    return this.webService.findAll();
  }
  @Get(':id')  //GetOne  (si le especifico de tipo Web no le puedo devolver un string en caso de error)
  getWeb(@Param() params) {
    return this.webService.findOne(params.id);
  }
  @Post('')  // crea la web recibida por el body y devuelve la web creada.
  createWeb(@Body() web : Web) : Web {
    let nuevaWeb : Web = this.webService.create(web);
    return nuevaWeb;
  }
  @Put(':id')  // modifica una web con los datos recibidos en el body y retorna la misma después de su modifiación
  modifyWeb(@Param() params, @Body() webMod: Web) : Web {
    return this.webService.modify(params.id, webMod);
  }
  @Delete(':id')  // devuelve un string indicando si fue borrada correctamente o si no existía el id a borrar
  eraseWeb(@Param() params): string {
    return this.webService.erase(params.id);
  }

}