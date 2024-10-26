import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  Ip,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'You sent a get request to the users endpoint';
  }

  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to the users endpoint';
  }
}
