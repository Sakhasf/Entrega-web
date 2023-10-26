import { Test, TestingModule } from '@nestjs/testing';
import { Web } from "src/Web/entities/web.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Servidor } from "src/servidores/entities/servidor.entity";
import { ServidoresController } from './servidores.controller';
import { ServidoresService } from './servidores.service';

describe('ServidoresController', () => {
  let servidoresController: ServidoresController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServidoresController],
      providers: [ServidoresService],
    }).compile();

    servidoresController = app.get<ServidoresController>(ServidoresController);
  });

  describe('root', () => {
    it('should return not found', () => {
      expect(servidoresController.findOne('100000')).toBe('not found');
    });
  });
});