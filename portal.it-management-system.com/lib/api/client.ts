export const apiClient = {
  async request<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(path, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return response.json();
  },
};
