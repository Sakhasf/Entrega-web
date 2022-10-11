import { Module } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { ServidoresController } from './servidores.controller';
import { Servidor } from './entities/servidor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Servidor])],
  controllers: [ServidoresController],
  providers: [ServidoresService],
  exports: [ServidoresService]
})
export class ServidoresModule {}
