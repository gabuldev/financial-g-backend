import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheService } from './cache/cache.service';
import { MemoryCacheService } from './cache/memory-cache.service';
import { FinancialRecordModule } from './modules/financial-record/financial-record.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    FinancialRecordModule,
  ],
  providers: [CacheService, MemoryCacheService],
})
export class AppModule {}
