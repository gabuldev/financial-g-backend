import { Module } from '@nestjs/common';
import { CacheService } from './cache/cache.service';
import { MemoryCacheService } from './cache/memory-cache.service';
import { FinancialRecordModule } from './modules/financial-record/financial-record.module';

@Module({
  imports: [FinancialRecordModule],
  providers: [CacheService, MemoryCacheService],
})
export class AppModule {}
