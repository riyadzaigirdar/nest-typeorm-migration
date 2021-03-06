import { Controller, Get } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.appService.findUser('riyad');
  }
}
