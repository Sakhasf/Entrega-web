import { Module } from '@nestjs/common';
import { WebService } from './web.service';
import { WebController } from './web.controller';
import { Web } from './entities/web.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Web])],
  controllers: [WebController],
  providers: [WebService],
  exports: [WebService],   
})
export class WebModule {}
