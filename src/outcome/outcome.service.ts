import { Injectable } from '@nestjs/common';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OutcomeService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOutcomeDto: CreateOutcomeDto) {
    return this.prisma.outcome.create({
      data: createOutcomeDto as Prisma.outcomeCreateInput,
    });
  }

  findAll() {
    return this.prisma.outcome.findMany();
  }

  findOne(id: string) {
    return this.prisma.outcome.findUnique({ where: { id } });
  }

  update(id: string, updateOutcomeDto: UpdateOutcomeDto) {
    return this.prisma.outcome.update({
      where: { id },
      data: updateOutcomeDto,
    });
  }

  remove(id: string) {
    return this.prisma.outcome.delete({ where: { id } });
  }
}
