import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersEntity } from './users.entity';

import * as bcrypt from  'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity) private readonly entity: Repository<UsersEntity>){}

  async createUser(u: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(u.password, salt);

    await this.entity.save({ ...u, password });

    return { email: u.email };
  }

  async getAllUsers() {
    return await this.entity.find();
  }

  async getUserById(id: number) {
    return await this.entity.createQueryBuilder()
      .where('id = :id', { id }).getOne();
  }

  async updateUser(id: number, u: CreateUserDto) {
    return await this.entity.update(id, u);
  }
}
