import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor (private readonly usersService: UsersService){}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @Get()
  async getAllUser() {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.usersService.getUserById(id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() dto: CreateUserDto) {
    return await this.usersService.updateUser(id, dto);
  }
}
