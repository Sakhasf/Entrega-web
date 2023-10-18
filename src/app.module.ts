import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebModule } from './Web/web.module';
import { ServidoresModule } from './servidores/servidores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web } from './Web/entities/web.entity';
import { Servidor } from './servidores/entities/servidor.entity';
import {} from 'dotenv/config'
require('dotenv').config();

@Module({
  imports: [WebModule, ServidoresModule, TypeOrmModule.forRoot({
    type: 'postgres',
//    host: 'localhost',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // host: 'postgres',
    // port: 5432,
    // username: 'prueba',
    // password: 'djtvpejR2fTfLzWWKUkHa6TragUzeGMB',
    // database: 'dataprueba',
    entities: [Web, Servidor],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
