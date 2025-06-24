import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportService, MonthItem } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  // @Post()
  // create(@Body() createReportDto: CreateReportDto) {
  //   return this.reportService.create(createReportDto);
  // }

  // @Get()
  // findAll() {
  //   return this.reportService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reportService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   return this.reportService.update(id, updateReportDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportService.remove(id);
  // }

  @Get('by-year/:year')
  findByYear(
    @Param('year') year: string,
  ): Promise<{ year: string; month: MonthItem[] }> {
    return this.reportService.findByYear(year);
  }
}
