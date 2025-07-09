import { Module } from '@nestjs/common';
import { CacheService } from 'src/cache/cache.service';
import { MemoryCacheService } from 'src/cache/memory-cache.service';
import { FinancialRecordController } from './financial-record.controller';
import { FinancialRecordService } from './financial-record.service';

@Module({
  providers: [FinancialRecordService, CacheService, MemoryCacheService],
  controllers: [FinancialRecordController],
})
export class FinancialRecordModule {}
