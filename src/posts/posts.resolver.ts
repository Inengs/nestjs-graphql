import {
  Resolver,
  Query,
  Args,
  Int,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';
import { User } from '../users/user.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post], { name: 'posts' })
  async findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Post | null> {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post, { name: 'createPost' })
  async create(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePostInput')
    updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Post, { name: 'deletePost' })
  async delete(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.delete(id);
  }

  @ResolveField(() => User)
  async author(@Parent() post: Post) {
    return this.postsService.getAuthor(post.userId);
  }
}
