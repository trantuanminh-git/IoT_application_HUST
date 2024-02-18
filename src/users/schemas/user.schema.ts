import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  data: [
    {
      temperature: number;
      humidity: number;
      noise: number;
      lux: number;
      quality: string;
      time: string;
    },
  ];
}

export const UserSchema = SchemaFactory.createForClass(User);
