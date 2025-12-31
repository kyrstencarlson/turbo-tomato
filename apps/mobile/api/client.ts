import axios, { AxiosInstance } from 'axios';

export const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
  });

  // Register client for interceptor management
  //   registerAxiosClient(client);

  // Attach token automatically
  client.interceptors.request.use(async (config) => {
    // const userId = await TokenStorage.getUserId();
    // const accessToken = await TokenStorage.getAccessToken();

    config.headers['Content-Type'] = 'application/json';

    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    // if (userId && userHeader) {
    //   config.headers['user-id'] = userId;
    // }
    return config;
  });

  return client;
};
