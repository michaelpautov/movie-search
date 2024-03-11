export type ResponseData<T> = {
    ok: boolean;
    description: T[] | string;
    error_code: number;
};
