import type { ApiPagination } from './ApiPagination';
export interface ApiMetadata {
    timestamp: string;
    executionTime: string;
    locale: string;
    environment: string;
    cache: 'HIT' | 'MISS' | 'STALE' | string;
    pagination?: ApiPagination;
}
//# sourceMappingURL=ApiMetadata.d.ts.map