import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mqtt from 'mqtt';
import { HttpApiService } from 'src/http-api/http-api.service';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient;
  constructor(
    private httpApiService: HttpApiService,
    private usersService: UsersService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async onModuleInit() {
    const host = 'broker.emqx.io';
    const port = '1883';
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

    const connectUrl = `mqtt://${host}:${port}`;

    const client = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      username: 'test001',
      password: 'test001',
      reconnectPeriod: 1000,
    });

    const topic = 'iot_test';

    client.on('connect', () => {
      console.log('Connected');

      client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
        client.publish(
          topic,
          'nodejs mqtt test',
          { qos: 0, retain: false },
          (error) => {
            if (error) {
              console.error(error);
            }
          },
        );
      });
    });

    const user = await this.userModel.findOne({ email: 'minh2@gmail.com' });

    client.on('message', async (topic, payload) => {
      const data_object = payload.toString();
      console.log('data_object,...', data_object);
      // console.log(typeof data_object); // Nếu kết quả không phải là "string", thì payload không phải là chuỗi

      const data_string = data_object.split('-');
      const data_json = {
        temperature: data_string[0],
        humidity: data_string[1],
        noise: data_string[2],
        lux: data_string[3],
      };

      const handleSaveData = async () => {
        const data_json_number = {
          temperature: +data_json.temperature,
          humidity: +data_json.humidity,
          noise: +data_json.noise,
          lux: +data_json.lux,
          time: new Date().toLocaleString(),
        };
        const isDataJsonNumberValid =
          data_json_number.temperature &&
          data_json_number.humidity &&
          data_json_number.noise &&
          data_json_number.lux;
        if (isDataJsonNumberValid) {
          user?.data.push(data_json_number);
          await user.save();
        }
      };

      handleSaveData();

      await this.httpApiService.getData_query(
        +data_json.temperature,
        +data_json.humidity,
        +data_json.noise,
        +data_json.lux,
      );
      console.log(data_json);
    });
  }
}
