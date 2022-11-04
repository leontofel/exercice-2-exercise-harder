import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DonationDto } from '../dto/donation.dto';
import { CreateDonationDto } from '../dto/create-donation.dto';
import { DonationServiceFactory } from './use-cases';
import { CreateUsecase } from './use-cases/create.usecase';
import { FindAllUsecase } from './use-cases/find-all.usecase';
import { FindByIdUsecase } from './use-cases/find-by-id.usecase';
import {DonationById} from "../dto/find-by-id.input";

@Resolver()
export class DonationResolver {
  constructor(private readonly serviceFactory: DonationServiceFactory) {}

  @Mutation(() => DonationDto, {
    name: 'createDonation',
    description:
      "This resolver creates a donation",
  })
  async createOrUpdate(
    @Args(`dto`, { type: () => CreateDonationDto }) dto: CreateDonationDto,
  ) {
    return (await this.serviceFactory.create(CreateUsecase)).handle(dto);
  }

  @Query(() => [DonationDto], {
    name: 'findAll',
    description: 'this resolver finds all donations in the database',
  })
  async findAll() {
    return (await this.serviceFactory.create(FindAllUsecase)).handle();
  }

  @Mutation(() => DonationDto, {
    name: 'findById',
    description: "This resolver finds a donation by it's id",
  })
  async findById(@Args(`dto`, { type: () => DonationById }) dto: DonationById) {
    return (await this.serviceFactory.create(FindByIdUsecase)).handle(dto.id);
  }
}
