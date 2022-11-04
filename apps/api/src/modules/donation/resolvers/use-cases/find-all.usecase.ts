import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { DonationRepository } from '../../repository/donation.repository';
import { DonationDto } from '../../dto/donation.dto';
import { GraphQLError } from 'graphql/error';

@Injectable()
export class FindAllUsecase
  implements UseCase<Promise<DonationDto[]>, [DonationDto]>
{
  constructor(private readonly donationRepository: DonationRepository) {}

  async handle() {
    return this.donationRepository.findAll();
  }
}
