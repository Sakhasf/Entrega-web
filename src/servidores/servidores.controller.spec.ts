import { Test, TestingModule } from '@nestjs/testing';
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