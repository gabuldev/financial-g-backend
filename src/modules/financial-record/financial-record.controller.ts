import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFinancialRecordDto } from './dtos/create-financial-record.dto';
import { FinancialRecordService } from './financial-record.service';

@Controller('financial-record')
export class FinancialRecordController {
  constructor(private readonly service: FinancialRecordService) {}

  @Get('/all')
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: CreateFinancialRecordDto) {
    return this.service.create(body);
  }
}
