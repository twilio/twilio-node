/// <reference types="node" />
import { HttpMethod } from "../interfaces";
export interface RequestOptions<TData> {
    method?: HttpMethod | "*";
    url?: string;
    auth?: string;
    params?: string;
    data?: TData | "*";
    headers?: Headers | "*";
    ca?: string | Buffer;
}
export interface Headers {
    [header: string]: string;
}
export default class Request<TData> {
    method: HttpMethod | "*";
    url: string;
    auth: string;
    params: string;
    data: TData | "*";
    headers: Headers | "*";
    ca: string | Buffer;
    constructor(opts?: RequestOptions<TData>);
    get ANY(): "*";
    attributeEqual(lhs: any, rhs: any): boolean;
    isEqual(other: Request<any>): boolean;
    toString(): string;
}
