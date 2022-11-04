import {Field, Int, ObjectType} from '@nestjs/graphql';

@ObjectType('DonationDto')
export class DonationDto {
  @Field(() => Int)
  id: number;

  @Field()
  count: number;

  @Field()
  displayName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  team?: string;

  @Field({ nullable: true })
  message?: string;

  @Field(() => Date)
  createdAt: Date;
}
