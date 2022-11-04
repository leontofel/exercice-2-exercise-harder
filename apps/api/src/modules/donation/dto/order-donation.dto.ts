import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OrderDonationDto {
  @Field({ nullable: true })
  field?: string;

  @Field({ nullable: true })
  direction?: string;
}
