import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [
      {
        id: 1,
        title: 'Hello world',
        content: 'Sample post',
      },
    ];
  }
}
