import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebModule } from './Web/web.module';
import { ServidoresModule } from './servidores/servidores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web } from './Web/entities/web.entity';
import { Servidor } from './servidores/entities/servidor.entity';

@Module({
  imports: [WebModule, ServidoresModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-cd8rsdun6mpnkgit336g-a',
//  host: 'localhost',
    port: 5432,
    username: 'prueba',
    password: 'djtvpejR2fTfLzWWKUkHa6TragUzeGMB',
//  password: 'secure',
    database: 'dataprueba',
    entities: [Web, Servidor],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
