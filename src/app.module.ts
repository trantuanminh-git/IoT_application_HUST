import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpApiModule } from './http-api/http-api.module';

@Module({
  imports: [HttpApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
