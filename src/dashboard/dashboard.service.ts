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
      console.log('incomes', incomes);
      total.totalIncome = incomes.reduce(
        (acc, income) => acc + income.total,
        0,
      );
    });

    await this.prisma.outcome.findMany().then((outcomes) => {
      console.log('outcomes', outcomes);
      total.totalOutcome = outcomes.reduce(
        (acc, outcome) => acc + outcome.total,
        0,
      );
    });

    total.totalBalance = total.totalIncome - total.totalOutcome;

    console.log('total', total);
    return total;
  }
}
