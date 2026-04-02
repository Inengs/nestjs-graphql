import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return this.usersService.findOne(id);
  }
}
