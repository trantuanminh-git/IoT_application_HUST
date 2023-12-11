import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpApiModule } from './http-api/http-api.module';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  imports: [HttpApiModule, MqttModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
