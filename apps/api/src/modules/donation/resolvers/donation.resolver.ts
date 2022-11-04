import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { DonationDto } from '../dto/donation.dto';
import { CreateDonationDto } from '../dto/create-donation.dto';
import { DonationServiceFactory } from './use-cases';
import { CreateUsecase } from './use-cases/create.usecase';
import { FindAllUsecase } from './use-cases/find-all.usecase';
import { FindByIdUsecase } from './use-cases/find-by-id.usecase';
import { OrderDonationDto } from '../dto/order-donation.dto';
import { FindAllSortedUsecase } from './use-cases/find-all-sorted.usecase';
import { FindTotalUsecase } from './use-cases/find-total.usecase';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class DonationResolver {
  constructor(private readonly serviceFactory: DonationServiceFactory) {}

  @Query(() => [DonationDto], {
    name: 'findAll',
    description:
      'this resolver finds all donations in the database, optional ordering can be passed to sort donations',
  })
  async findAll() {
    return (await this.serviceFactory.create(FindAllUsecase)).handle();
  }

  @Query(() => [DonationDto], {
    name: 'findAllSorted',
    description:
      'this resolver finds all donations in the database, ordering params must be passed to sort donations',
  })
  async findAllSorted(
    @Args('ordersBy', { type: () => OrderDonationDto })
    orderBy?: OrderDonationDto,
  ) {
    return (await this.serviceFactory.create(FindAllSortedUsecase)).handle(
      orderBy,
    );
  }

  @Query(() => DonationDto, {
    name: 'findById',
    description: "This resolver finds a donation by it's id",
  })
  async findById(@Args(`id`, { type: () => Int }) id: number) {
    return (await this.serviceFactory.create(FindByIdUsecase)).handle(id);
  }

  @Query(() => Number, {
    name: 'findTotal',
    description: 'this resolver return the total donations count',
  })
  async findTotal() {
    return (await this.serviceFactory.create(FindTotalUsecase)).handle();
  }

  @Subscription(() => Number, {
    name: 'totalUpdated',
  })
  async totalUpdated() {
    return pubSub.asyncIterator('totalUpdated');
  }

  @Mutation(() => DonationDto, {
    name: 'createDonation',
    description: 'This resolver creates a donation',
  })
  async create(
    @Args(`dto`, { type: () => CreateDonationDto }) dto: CreateDonationDto,
  ) {
    return (await this.serviceFactory.create(CreateUsecase)).handle(dto);
  }
}
