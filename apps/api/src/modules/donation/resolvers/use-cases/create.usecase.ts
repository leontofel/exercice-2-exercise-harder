import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { DonationRepository } from '../../repository/donation.repository';
import { DonationDto } from '../../dto/donation.dto';
import { GraphQLError } from 'graphql/error';
import { CreateDonationDto } from '../../dto/create-donation.dto';

@Injectable()
export class CreateUsecase
  implements UseCase<Promise<DonationDto>, [dto: CreateDonationDto]>
{
  constructor(private readonly donationRepository: DonationRepository) {}

  async handle(dto: CreateDonationDto) {
    /*
    if (dto.id) {
      const profile = await this.donationRepository.findById(dto.id);

      if (!profile) {
        throw new GraphQLError(`Profile not found`);
      }

      if (profile.userId !== ctx.id) {
        throw new GraphQLError(`Unauthorized`);
      }

      return this.donationRepository.update(profile.id, dto);
    }

    const profile = await this.donationRepository.findByUserId(ctx.id);

    if (profile) {
      throw new GraphQLError(`A profile already exists for this user`);
    }

     */
    return this.donationRepository.create(dto);
  }
}
