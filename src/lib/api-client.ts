import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";

export function createApiClient() {
  const client = axios.create({
    baseURL: "/api/proxy",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer`,
    },
  });

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const orignalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !orignalRequest._retry) {
        orignalRequest._retry = true;

        try {
          const toastId = toast.loading("Refreshing session");
          const refreshResponse = await client.post("/auth/refresh");
          if (refreshResponse.status === 200) {
            orignalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
            client.defaults.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;

            if (typeof window !== "undefined") {
              const event = new CustomEvent("token-refreshed", {
                detail: {
                  accessToken: refreshResponse.data.accessToken,
                },
              });
              window.dispatchEvent(event);
            }

            toast.dismiss(toastId);
            toast.success("Session refreshed", { id: toastId });

            return client(orignalRequest);
          } else {
            throw new Error("Refresh failed");
          }
        } catch (error) {
          if (process.env.NODE_ENV === "development") {
            console.error({ error });
          }
          toast.error("Refresh failed. Please log in again");
          if (typeof window !== "undefined") {
            window.location.href = "/";
          }
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    },
  );

  return client;
}

const apiClient = axios.create({
  baseURL: "/api/proxy",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
