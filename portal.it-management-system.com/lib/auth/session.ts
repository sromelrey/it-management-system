import { cookies } from "next/headers";

const SESSION_COOKIE = "it-management-session";

// Create a mock HTTP-only authentication session.
export async function createSession() {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

// Remove the current authentication session.
export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);
}

// Check if an authentication session exitsx
export async function hasSession() {
  const cookieStore = await cookies();

  return cookieStore.has(SESSION_COOKIE);
}

export { SESSION_COOKIE };
