import { Module } from '@nestjs/common';
import { HttpApiService } from './http-api.service';
import { HttpApiController } from './http-api.controller';

@Module({
  controllers: [HttpApiController],
  providers: [HttpApiService],
  exports: [HttpApiService],
})
export class HttpApiModule {}
