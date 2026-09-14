import React from "react";
import { LoginForm } from "./login-form";

function page() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-muted/40 px-4'>
      <div className='w-full max-w-md'>
        <div className='mb-6 text-center'>
          <h1 className='text-2xl font-bold tracking-tight'>
            IT Management System
          </h1>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}

export default page;
