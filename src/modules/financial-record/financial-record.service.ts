import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class FinancialRecordService {
  constructor(private readonly cacheService: CacheService) {}
  getAll() {
    const getCache = this.cacheService.get('financial-record') as any[];
    return getCache;
  }

  create(body: any) {
    let financialRecords = this.cacheService.get('financial-record') as
      | any[]
      | null;
    if (!financialRecords) {
      financialRecords = [];
    }
    const newCache = [...financialRecords, body];
    this.cacheService.set('financial-record', newCache);
    this.cacheService.set('financial-record', newCache);
    return body;
  }
}
