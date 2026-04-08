import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [PostsService, PostsResolver],
  imports: [PrismaModule, UsersModule],
  exports: [PostsService],
})
export class PostsModule {}
