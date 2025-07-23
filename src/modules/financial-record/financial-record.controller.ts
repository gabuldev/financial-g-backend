import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFinancialRecordDto } from './dtos/create-financial-record.dto';
import { FinancialRecordDto } from './dtos/financial-record.dto';
import { FinancialRecordService } from './financial-record.service';

@ApiTags('financial-record')
@Controller('financial-record')
export class FinancialRecordController {
  constructor(private readonly service: FinancialRecordService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Get all financial records' })
  @ApiResponse({ status: 200, type: [FinancialRecordDto] })
  getAll() {
    return this.service.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a financial record' })
  @ApiResponse({ status: 201, type: FinancialRecordDto })
  create(@Body() body: CreateFinancialRecordDto) {
    return this.service.create(body);
  }
}
