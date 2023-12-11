import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MqttModule } from './mqtt/mqtt.module';
// import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // const mqttApp = await NestFactory.createMicroservice<MqttModule>(MqttModule, {
  //   transport: Transport.MQTT,
  //   options: {
  //     url: 'mqtt://your-mqtt-broker-url', // Replace with your MQTT broker URL
  //   },
  // });
  // await mqttApp.listen();
}
bootstrap();
