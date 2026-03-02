import type { SigninDto, SigninResponse } from "@/types";

export const mockSignIn = (payload: SigninDto): Promise<SigninResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accessToken: "access-token",
        refreshToken: "refresh-token",
        user: {
          email: payload.email,
          name: "John Doe",
          id: "user-id",
          role: "user",
        },
      });
    }, 5000);
  });
};
