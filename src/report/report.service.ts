import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface MonthItem {
  month: number;
  income: { date: string; type: string; total: number }[];
  outcome: { date: string; type: string; total: number }[];
}

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}

  // create(createReportDto: CreateReportDto) {
  //   return this.prisma.report.create({
  //     data: createReportDto as Prisma.reportCreateInput,
  //   });
  // }

  // findAll() {
  //   return this.prisma.report.findMany();
  // }

  // findOne(id: string) {
  //   return this.prisma.report.findUnique({ where: { id } });
  // }

  // update(id: string, updateReportDto: UpdateReportDto) {
  //   return this.prisma.report.update({ where: { id }, data: updateReportDto });
  // }

  // remove(id: string) {
  //   return this.prisma.report.delete({ where: { id } });
  // }

  async findByYear(year: string) {
    const result: { year: string; month: MonthItem[] } = {
      year,
      month: [],
    };

    for (let i = 1; i <= 12; i++) {
      const incomes = await this.prisma.income.findMany({
        where: {
          date: {
            startsWith: `${year}-${i < 10 ? '0' + i : i}`,
          },
        },
        select: {
          date: true,
          total: true,
        },
      });

      const outcomes = await this.prisma.outcome.findMany({
        where: {
          date: {
            startsWith: `${year}-${i < 10 ? '0' + i : i}`,
          },
        },
        select: {
          date: true,
          total: true,
        },
      });

      result.month.push({
        month: i,
        income: incomes.map((income) => ({
          date: income.date,
          type: 'income',
          total: income.total,
        })),
        outcome: outcomes.map((outcome) => ({
          date: outcome.date,
          type: 'outcome',
          total: outcome.total,
        })),
      });
    }

    return result;
  }
}
