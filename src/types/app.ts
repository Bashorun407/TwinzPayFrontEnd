import { HTTP_METHODS } from "next/dist/server/web/http";
import type { NextRequest } from "next/server";

export type Maybe<T> = T | null;

export type MaybePromise<T> = Promise<T | null> | PromiseLike<T | null>;

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type MakeRequired<T, K extends keyof T> = T & {
  [P in K]-?: NonNullable<T[P]>;
};

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type HttpMethod = (typeof HTTP_METHODS)[number];

export interface HttpRequest {
  request: NextRequest;
  path: string[];
  method: HttpMethod;
}
