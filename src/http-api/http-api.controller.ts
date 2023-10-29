import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { HttpApiService } from './http-api.service';
import { GetDataRequestBodyDto } from './dto/get-data-request-body.dto';

@Controller('http-api')
export class HttpApiController {
  constructor(private readonly httpApiService: HttpApiService) {}

  @Get('/get_data_query')
  async getData_query(
    @Query('field1') field1: number,
    @Query('field2') field2: number,
    @Query('field3') field3: number,
    @Query('field4') field4: number,
  ) {
    return this.httpApiService.getData_query(field1, field2, field3, field4);
  }

  @Get('/get_data_request_body')
  async getData_request_body(
    @Body() getDataRequestBodyDto: GetDataRequestBodyDto,
  ) {
    return this.httpApiService.getData_request_body(getDataRequestBodyDto);
  }

  @Get('/get_data_channel/:channel')
  async getData_channel(
    @Param('channel') channel: string,
    @Query('result') results: number,
  ) {
    return this.httpApiService.getData_channel(channel, results);
  }
}
