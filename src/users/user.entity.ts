import { Field, Int, ObjectType } from '@nestjs/graphql'; // ObjectType marks the class as a GraphQL, Field marks a property as a GraphQL field, Int tells GraphQL this is an integer

@ObjectType() // this is a graphql type that can be returned in queries
export class User {
  @Field(() => Int) // exposes the propery and tells the type
  id: number;

  @Field()
  username: string;

  @Field() // These don't need () => String because GraphQL automatically infers strings from TypeScript's string type.
  email: string;
}
