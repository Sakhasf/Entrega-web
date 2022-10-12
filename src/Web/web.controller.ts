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

  @Post('')  // ataja el Post request y llama a un metodo que levanta el servicio create.
  createWeb(@Body() web : WebDTO | Web) : Promise<Web> { // Puede recibir WebDTO o la entidad para que en caso de que se cargue a que servidor pertenece, tenga acceso a la relacion
    let nuevaWeb : Promise<Web> = this.webService.create(web);
    return nuevaWeb;
  }

  @Patch(':id')  // Recibe el Patch request 
  modifyWeb(@Param() params, @Body() webMod: ModifyWebDto | Web) { // admite WebDTO o entidad WEB por si se modifica la relacion
    return this.webService.modify(params.id, webMod);
  }
 
  @Delete(':id') // recibe el Delete request
  eraseWeb(@Param() params): Promise<Web> { 
    return this.webService.erase(params.id);
  }
}