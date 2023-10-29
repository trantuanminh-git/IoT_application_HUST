import { PartialType } from '@nestjs/mapped-types';
import { CreateHttpApiDto } from './create-http-api.dto';

export class UpdateHttpApiDto extends PartialType(CreateHttpApiDto) {}
