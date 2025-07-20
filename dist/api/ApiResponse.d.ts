import type { ApiMetadata } from './ApiMetadata';
export interface ApiResponse<T> {
    version: string;
    success: boolean;
    errors: string[];
    metadata: ApiMetadata;
    data: {
        items: T;
    };
}
//# sourceMappingURL=ApiResponse.d.ts.map