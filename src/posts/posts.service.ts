import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async create(data: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({ data: data });
  }

  async update(id: number, data: UpdatePostInput): Promise<Post> {
    return this.prisma.post.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }

  async getAuthor(userId: number) {
    return this.usersService.findOne(userId);
  }
}
