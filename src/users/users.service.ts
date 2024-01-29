import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByPage(page: number) {
    console.log('////////');
    const total = await this.userModel.countDocuments({}).exec();
    const per_page = 6;
    const total_pages = Math.floor(total / per_page) + 1;
    // const initID =
    const users = await this.userModel
      .find()
      .limit(per_page)
      .skip(per_page * (page - 1))
      .exec();
    const data = {
      page,
      per_page,
      total,
      total_pages,
      data: users,
    };
    console.log(data);
    return data;
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      upsert: true,
      new: true, // new: true  --> return the updated value instead of the old value
    });
  }

  findUserByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
