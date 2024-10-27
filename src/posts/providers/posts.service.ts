import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    return [
      {
        title: 'Test title',
        content: 'Test content',
      },
      {
        title: 'Test title',
        content: 'Test content',
      },
      {
        title: 'Test title',
        content: 'Test content',
      },
    ];
  }
}
