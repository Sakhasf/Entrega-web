import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { WebDTO } from './dtos/create-web-dto';
import { ModifyWebDto } from './dtos/update-web-dto';
import { Web } from './entities/web.entity';
import { WebService } from './web.service';

@Controller('webs')
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Get()  //GetAll 
  getWebs(): Promise<Web[]> {
    return this.webService.findAll();
  }

  @Get(':id')  //GetOne  
  getWeb(@Param() params): Promise<Web> {
    return this.webService.findOne(params.id);
  } 

  @Post('')  // crea la web recibida por el body y devuelve la web creada.
  createWeb(@Body() web : WebDTO) : Promise<Web> {
    let nuevaWeb : Promise<Web> = this.webService.create(web);
    return nuevaWeb;
  }

  @Patch(':id')  // modifica una web con los datos recibidos en el body y retorna la misma después de su modifiación
  modifyWeb(@Param() params, @Body() webMod: ModifyWebDto) {
    return this.webService.modify(params.id, webMod);
  }
 
  @Delete(':id') // devuelve un string indicando si fue borrada correctamente o si no existía el id a borrar
  eraseWeb(@Param() params): Promise<Web> {
    return this.webService.erase(params.id);
  }
}