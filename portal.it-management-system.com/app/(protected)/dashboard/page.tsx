"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";

export default function DashboardPage() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='space-y-4 text-center'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>

        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </main>
  );
}
