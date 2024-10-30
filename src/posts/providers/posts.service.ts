import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
    /**
     * Inject postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Create post
    let post = this.postsRepository.create(createPostDto);

    // return the post to the user
    return await this.postsRepository.save(post);
  }

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    let posts = await this.postsRepository.find();

    return posts;
  }

  public async delete(id: number) {
    // Find the post
    let post = await this.postsRepository.findOneBy({ id });
    // Delete the post
    await this.postsRepository.delete(id);
    // Delete the meta options
    await this.metaOptionsRepository.delete(post.metaOptions.id);
    // Confirmation
    return { deleted: true, id };
  }
}
