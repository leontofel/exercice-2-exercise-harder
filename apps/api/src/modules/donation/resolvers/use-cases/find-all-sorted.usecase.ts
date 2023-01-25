import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { DonationRepository } from '../../repository/donation.repository';
import { DonationDto } from '../../dto/donation.dto';
import { GraphQLError } from 'graphql/error';
import { OrderDonationDto } from '../../dto/order-donation.dto';

@Injectable()
export class FindAllSortedUsecase
  implements UseCase<Promise<DonationDto[]>, [OrderDonationDto]>
{
  constructor(private readonly donationRepository: DonationRepository) {}

  async handle(orderBy?: OrderDonationDto) {
    return this.donationRepository.findAllSorted(orderBy);
  }
}