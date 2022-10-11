import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebModule } from './Web/web.module';
import { ServidoresModule } from './servidores/servidores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web } from './Web/web.entity';
import { Servidor } from './servidores/entities/servidor.entity';

@Module({
  imports: [WebModule, ServidoresModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'prueba',
    password: 'secure',
    database: 'dataprueba',
    entities: [Web, Servidor],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
