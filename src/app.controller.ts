import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OptionDto } from './option';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: OptionDto) {
    console.log('body', JSON.stringify(body));
    return this.appService.getHello(body);
  }
}
