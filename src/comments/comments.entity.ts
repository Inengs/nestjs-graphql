import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Post } from 'src/posts/posts.entity';

@ObjectType()
export class CommentType {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  postId: number;

  @Field(() => User)
  author?: User;

  @Field(() => Post)
  post?: Post;
}
