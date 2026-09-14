import { AuthUser } from "@/types/auth.types";
import { create } from "zustand";

import { login as loginApi } from "@/lib/api/auth.api";
import { persist } from "zustand/middleware";

type AuthState = {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({
          isLoading: true,
          error: null,
        });

        try {
          const session = await loginApi({
            email,
            password,
          });

          // create the mock authentication session cookie.

          await fetch("/api/auth/session", {
            method: "POST",
          });
          set({
            user: session.user,
            accessToken: session.accessToken,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : "Unable to sign in",
          });
        }
        return false;
      },
      logout: async () => {
        await fetch("/api/auth/session", {
          method: "DELETE",
        });
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          error: null,
        });
      },
      clearError: async () => {
        set({
          error: null,
        });
      },
    }),
    { name: "it-management-auth" },
  ),
);
