import { type MovieShortInfo, type ResponseData } from '../types';
export declare const getMovies: (queryString?: string) => Promise<ResponseData<MovieShortInfo> | Error>;
