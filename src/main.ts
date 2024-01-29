import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MqttModule } from './mqtt/mqtt.module';
// import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const mqttApp = await NestFactory.createMicroservice<MqttModule>(MqttModule, {
  //   transport: Transport.MQTT,
  //   options: {
  //     url: 'mqtt://your-mqtt-broker-url', // Replace with your MQTT broker URL
  //   },
  // });
  // await mqttApp.listen();

  app.enableCors({
    // origin: 'http://54.179.238.121:3000',
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: '*',
  });
  await app.listen(3000);
}
bootstrap();
