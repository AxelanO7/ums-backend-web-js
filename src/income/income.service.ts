import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IncomeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIncomeDto: CreateIncomeDto) {
    return this.prisma.income.create({
      data: createIncomeDto as Prisma.incomeCreateInput,
    });
  }

  findAll() {
    return this.prisma.income.findMany();
  }

  findOne(id: string) {
    return this.prisma.income.findUnique({ where: { id } });
  }

  update(id: string, updateIncomeDto: UpdateIncomeDto) {
    return this.prisma.income.update({ where: { id }, data: updateIncomeDto });
  }

  remove(id: string) {
    return this.prisma.income.delete({ where: { id } });
  }
}
