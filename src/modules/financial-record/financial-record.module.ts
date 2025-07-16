import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheService } from 'src/cache/cache.service';
import { MemoryCacheService } from 'src/cache/memory-cache.service';
import {
  FinancialRecord,
  FinancialRecordSchema,
} from 'src/schemas/financial-record.schema';
import { FinancialRecordController } from './financial-record.controller';
import { FinancialRecordService } from './financial-record.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FinancialRecord.name, schema: FinancialRecordSchema },
    ]),
  ],
  providers: [FinancialRecordService, CacheService, MemoryCacheService],
  controllers: [FinancialRecordController],
})
export class FinancialRecordModule {}
