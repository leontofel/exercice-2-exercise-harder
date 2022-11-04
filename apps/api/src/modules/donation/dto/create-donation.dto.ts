import {Field, InputType, ObjectType} from '@nestjs/graphql';

@InputType('CreateDonationDto')
export class CreateDonationDto {
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;
}
