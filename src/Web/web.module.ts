import { Module } from '@nestjs/common';
import { WebService } from './web.service';
import { WebController } from './web.controller';

@Module({
  imports: [],
  controllers: [WebController],
  providers: [WebService],
  exports: [WebService],   
})
export class WebModule {}
