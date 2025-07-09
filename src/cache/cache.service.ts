import { Injectable } from '@nestjs/common';
import { MemoryCacheService } from './memory-cache.service';

@Injectable()
export class CacheService {
  private cacheProvider: MemoryCacheService;

  constructor(private memoryCache: MemoryCacheService) {
    this.cacheProvider = this.memoryCache;
  }

  public set(key: string, value: any, ttl?: number): void | Promise<void> {
    return this.cacheProvider.set(key, value, ttl);
  }

  public get(key: string): any | Promise<any> {
    return this.cacheProvider.get(key);
  }

  public delete(key: string): void | Promise<void> {
    return this.cacheProvider.delete(key);
  }

  public clear(): void | Promise<void> {
    return this.cacheProvider.clear();
  }
}
