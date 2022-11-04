import { PrismaService } from '../../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from '../dto/create-donation.dto';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Injectable()
export class DonationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(donation: CreateDonationDto) {
    const created = await this.prisma.donation.create({
      data: {
        ...donation,
      },
    });
    const total = await this.findTotal();

    await pubSub.publish('totalUpdated', { totalUpdated: { total } });

    return created;
  }

  async findAll() {
    return this.prisma.donation.findMany();
  }

  async findAllSorted(orderBy?: { field?: string; direction?: string }) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  async findByDonationId(id: number) {
    return this.prisma.donation.findUnique({
      where: { id },
    });
  }

  async findTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });
    return response._sum.count;
  }
}
