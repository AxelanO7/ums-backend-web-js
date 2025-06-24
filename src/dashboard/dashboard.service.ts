import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const total = {
      totalIncome: 0,
      totalOutcome: 0,
      totalBalance: 0,
    };

    await this.prisma.income.findMany().then((incomes) => {
      total.totalIncome = incomes.reduce(
        (acc, income) => acc + income.total,
        0,
      );
    });

    await this.prisma.outcome.findMany().then((outcomes) => {
      total.totalOutcome = outcomes.reduce(
        (acc, outcome) => acc + outcome.total,
        0,
      );
    });

    total.totalBalance = total.totalIncome - total.totalOutcome;
    return total;
  }
}
