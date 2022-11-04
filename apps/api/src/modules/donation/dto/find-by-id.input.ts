import { Field, InputType, Int } from "@nestjs/graphql";

@InputType('DonationById')
export class DonationById {
  @Field()
  id: number;
}
