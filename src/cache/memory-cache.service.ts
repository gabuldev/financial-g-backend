import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryCacheService {
    private cache = new Map<string, { value: any; expiration: number }>();

    public set(key: string, value: any, ttl = 3600): void {
        const expiration = Date.now() + ttl * 1000;
        this.cache.set(key, { value, expiration });
        setTimeout(() => this.cache.delete(key), ttl * 1000);
    }

    public get<T>(key: string): T {
        const data = this.cache.get(key);
        if (data && data.expiration > Date.now()) {
            return data.value;
        } else {
            this.cache.delete(key);
            return null;
        }
    }

    public delete(key: string): void {
        this.cache.delete(key);
    }

    public clear(): void {
        this.cache.clear();
    }
}
