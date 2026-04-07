import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  author?: User;
}
