import { Module } from '@nestjs/common';
import { DonationRepository } from './repository/donation.repository';
import { PrismaService } from '../../core/prisma/prisma.service';
import { DonationResolver } from './resolvers/donation.resolver';
import { DonationServiceFactory } from './resolvers/use-cases';

@Module({
  providers: [
    DonationRepository,
    PrismaService,
    DonationResolver,
    DonationServiceFactory,
  ],
})
export class DonationModule {}
