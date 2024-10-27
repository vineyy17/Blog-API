import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@yopmail.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@yopmail.com',
      },
      {
        firstName: 'James',
        email: 'james@yopmail.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@yopmail.com',
    };
  }
}
