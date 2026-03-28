// TODO: Initialize API client once backend URL is known
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

// TODO: Add auth token injection (Supabase JWT)
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      // TODO: Authorization: `Bearer ${await getToken()}`
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// TODO: Implement once AI endpoint is ready
export async function analyzeRoom(_imageUri: string): Promise<void> {
  // return request("/rooms/analyze", { method: "POST", body: JSON.stringify({ imageUri }) });
  throw new Error("Not implemented yet");
}

export const api = { analyzeRoom };
