import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  providers: [CommentsService, CommentsResolver],
  imports: [PrismaModule, UsersModule, PostsModule],
})
export class CommentsModule {}
