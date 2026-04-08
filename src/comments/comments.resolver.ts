import {
  Resolver,
  Args,
  Query,
  Int,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { Post } from '../posts/posts.entity';
import { CommentsService } from './comments.service';
import { CommentType } from './comments.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => CommentType)
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Query(() => [CommentType], { name: 'comments' })
  async findAll(): Promise<CommentType[]> {
    return this.commentsService.findAll();
  }

  @Query(() => CommentType, { name: 'comment' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CommentType | null> {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => CommentType, { name: 'createComment' })
  async create(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ): Promise<CommentType> {
    return this.commentsService.create(createCommentInput);
  }

  @Mutation(() => CommentType, { name: 'updateComment' })
  async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCommentInput')
    updateCommentInput: UpdateCommentInput,
  ): Promise<CommentType> {
    return this.commentsService.update(id, updateCommentInput);
  }

  @Mutation(() => CommentType, { name: 'deleteComment' })
  async delete(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CommentType> {
    return this.commentsService.delete(id);
  }

  @ResolveField(() => User)
  async author(@Parent() comment: CommentType) {
    return this.commentsService.getAuthor(comment.userId);
  }

  @ResolveField(() => Post)
  async post(@Parent() comment: CommentType) {
    return this.commentsService.getPost(comment.postId);
  }
}
