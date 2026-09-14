import { AuthSession, LoginRequest } from "@/types/auth.types";

const MOCK_USER = {
  id: 1,
  email: "admin@test.com",
  name: "System Administrator",
  role: "SUPER_ADMIN",
};
const MOCK_PASSWORD = "Admin123!";

export async function login(credentials: LoginRequest): Promise<AuthSession> {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  if (
    credentials.email !== MOCK_USER.email ||
    credentials.password !== MOCK_PASSWORD
  ) {
    throw new Error("Invalid email or password");
  }

  return {
    accessToken: "mock-access-token",
    user: MOCK_USER,
  };
}
