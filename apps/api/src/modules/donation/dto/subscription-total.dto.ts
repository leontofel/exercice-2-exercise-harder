import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('SubscriptionTotalDto')
export class SubscriptionTotalDto {
  @Field()
  total: number;
}
