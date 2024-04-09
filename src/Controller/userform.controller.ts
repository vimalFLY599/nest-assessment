import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { userformservice } from 'src/provider/userform.service';

import { userformInterface } from 'src/Interface/userform.interface';

@Controller('userform')
export class userformController {
constructor(private userformService: userformservice) {}

@Post()
  async create(@Body() UserformDto: userformInterface) {
    
    const uform = await this.userformService.create(UserformDto);
    if(!uform) {
      return 'error in creating user form'
    }
    return 'user form created successfully'
  }
@Get()
  async findAll(@Req() request: Request) {
    const uformArray: Array<userformInterface> = await this.userformService.findAll()
    return uformArray
  }
@Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newform: any = await this.userformService.update(id, body)
    return "userform updated";
  }
@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userformService.delete(id)
    return "user form deleted"
  }
}