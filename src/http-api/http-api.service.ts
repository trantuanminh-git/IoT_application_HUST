import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetDataRequestBodyDto } from './dto/get-data-request-body.dto';

@Injectable()
export class HttpApiService {
  async getData_query(
    field1: number,
    field2: number,
    field3: number,
    field4: number,
  ) {
    try {
      const KEY = 'GVN6PP2O5DHT0UZP';
      // const KEY = 'T7H40F0X82VGW7L5';
      const url = `https://api.thingspeak.com/update?api_key=${KEY}&field1=${field1}&field2=${field2}&field3=${field3}&field4=${field4}`;
      const data = await axios.get(url);
      return data.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async getData_request_body(data: GetDataRequestBodyDto) {
    const field1 = data.field1;
    const field2 = data.field2;
    const field3 = data.field3;
    const field4 = data.field4;
    try {
      const KEY = 'GVN6PP2O5DHT0UZP';
      // const KEY = 'T7H40F0X82VGW7L5';
      const url = `https://api.thingspeak.com/update?api_key=${KEY}&field1=${field1}&field2=${field2}&field3=${field3}&field4=${field4}`;
      const data = await axios.get(url);
      return data.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getData_channel(channel: string, results: number) {
    try {
      const url = results
        ? `https://api.thingspeak.com/channels/${channel}/feeds.json?results=${results}`
        : `https://api.thingspeak.com/channels/${channel}/feeds.json`;
      const data = await axios.get(url);
      return data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
