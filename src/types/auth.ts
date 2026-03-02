import type { User } from "./user";

export interface SigninDto {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface SignupDto {
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface SignupResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
