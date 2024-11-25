import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  getHome(): string {
    return this.appService.getHome();
  }

  @Post('/home')
  postsearch() {
    return {'data':'filter data'};
  }

  @Get('/about')
  getAbout(): string {
    return this.appService.getAbout();
  }

  @Post('/contact')
  postContact() {
    return this.appService.postContact();
  }

  @Post('/register')
  addNewUser(@Body() data) {
    return this.appService.addNewUser(data);
  }

  @Get('/allUser')
  allUSer(): string {
    return this.appService.allUser();
  }

  @Get('/allUser/:username')
  userInfo(@Param("username") name) : any{
    return this.appService.userInfo(name);
  }

}