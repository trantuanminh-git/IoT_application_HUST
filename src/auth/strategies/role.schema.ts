import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class Role {
  @Prop()
  role: string;

  @Prop()
  permission: string;
}
