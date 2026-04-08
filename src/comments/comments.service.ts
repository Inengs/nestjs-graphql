import { Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CommentType } from './comments.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  async findAll(): Promise<CommentType[]> {
    return this.prisma.comment.findMany();
  }

  async findOne(id: number): Promise<CommentType | null> {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  async create(data: CreateCommentInput): Promise<CommentType> {
    return this.prisma.comment.create({ data });
  }

  async update(id: number, data: UpdateCommentInput): Promise<CommentType> {
    return this.prisma.comment.update({ where: { id }, data });
  }

  async delete(id: number): Promise<CommentType> {
    return this.prisma.comment.delete({ where: { id } });
  }

  async getAuthor(userId: number) {
    return this.usersService.findOne(userId);
  }

  async getPost(postId: number) {
    return this.postsService.findOne(postId);
  }
}
