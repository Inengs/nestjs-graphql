import { GraphQLModule } from '@nestjs/graphql'; // handles all the graphql setup for you
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Apollo is the engine that runs GraphQL under the hood
import { join } from 'path'; // used for building file paths
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // forRoot configures GraphQL once for the whole app
      driver: ApolloDriver, // driver tells Nestjs to use Apollo as the graphql
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //  NestJS will automatically generate your GraphQL schema file at src/schema.gql based on your code.
    }),
    UsersModule,
    PrismaModule,
  ],
})
export class AppModule {}
