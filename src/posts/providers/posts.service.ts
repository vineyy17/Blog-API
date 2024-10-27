import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        author: user,
        title: 'Test title',
        content: 'Test content',
      },
      {
        author: user,
        title: 'Test title',
        content: 'Test content',
      },
      {
        author: user,
        title: 'Test title',
        content: 'Test content',
      },
    ];
  }
}
