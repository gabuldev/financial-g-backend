import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CacheService } from 'src/cache/cache.service';
import { FinancialRecord } from 'src/schemas/financial-record.schema';
import { CreateFinancialRecordDto } from './dtos/create-financial-record.dto';

@Injectable()
export class FinancialRecordService {
  constructor(
    private readonly cacheService: CacheService,
    @InjectModel(FinancialRecord.name)
    private financialRecordModel: Model<FinancialRecord>,
  ) {}

  getAll(): Promise<FinancialRecord[]> {
    return this.financialRecordModel.find();
  }

  create(body: CreateFinancialRecordDto): Promise<FinancialRecord> {
    const newFinancialRecord = new this.financialRecordModel(body);
    return newFinancialRecord.save();
  }
}
