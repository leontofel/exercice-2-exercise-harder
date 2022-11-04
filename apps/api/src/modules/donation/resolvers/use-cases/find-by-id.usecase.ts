import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { DonationRepository } from '../../repository/donation.repository';
import { DonationDto } from '../../dto/donation.dto';
import { GraphQLError } from 'graphql/error';

@Injectable()
export class FindByIdUsecase
  implements UseCase<Promise<DonationDto>, [id: number]>
{
  constructor(private readonly donationRepository: DonationRepository) {}

  async handle(id: number) {
    return this.donationRepository.findById(id);
  }
}
