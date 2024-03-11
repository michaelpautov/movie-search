import { type MovieFullInfo } from '../types';
export declare const getMovie: (id?: string) => Promise<MovieFullInfo | Error>;
