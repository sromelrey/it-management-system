export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: number;
  email: string;
  name: string;
  role: string;
};

export type AuthSession = {
  accessToken: string;
  user: AuthUser;
};
