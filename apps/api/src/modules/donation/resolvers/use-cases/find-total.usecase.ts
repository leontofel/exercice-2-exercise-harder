import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { DonationRepository } from '../../repository/donation.repository';

@Injectable()
export class FindTotalUsecase
    implements UseCase<Promise<number>, [number]>
{
  constructor(private readonly donationRepository: DonationRepository) {}

  async handle() {
    return this.donationRepository.findTotal();
  }
}
