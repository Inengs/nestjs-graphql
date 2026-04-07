import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user-input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUserInput) {
    return this.prisma.user.create({ data: data });
  }
}
