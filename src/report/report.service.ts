import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReportDto: CreateReportDto) {
    return this.prisma.report.create({
      data: createReportDto as Prisma.reportCreateInput,
    });
  }

  findAll() {
    return this.prisma.report.findMany();
  }

  findOne(id: string) {
    return this.prisma.report.findUnique({ where: { id } });
  }

  update(id: string, updateReportDto: UpdateReportDto) {
    return this.prisma.report.update({ where: { id }, data: updateReportDto });
  }

  remove(id: string) {
    return this.prisma.report.delete({ where: { id } });
  }
}
