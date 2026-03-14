import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'john', email: 'john@example.com' },
    { id: 2, username: 'jane', email: 'jane@example.com' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
