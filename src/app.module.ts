import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpApiModule } from './http-api/http-api.module';
import { MqttModule } from './mqtt/mqtt.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:0988888888@iotapplication.1xzbdzg.mongodb.net/?retryWrites=true&w=majority',
    ),
    HttpApiModule,
    MqttModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
