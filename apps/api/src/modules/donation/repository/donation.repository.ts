import { PrismaService } from '../../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from '../dto/create-donation.dto';

@Injectable()
export class DonationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(donation: CreateDonationDto) {
    return this.prisma.donation.create({
      data: {
        ...donation,
      },
    });
  }

  async findAll() {
    return this.prisma.donation.findMany();
  }

  async findById(id: number) {
    return this.prisma.donation.findUnique({ where: { id } });
  }
}
