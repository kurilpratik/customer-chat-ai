"use client";

import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-background relative flex h-screen w-screen justify-center">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-blue-100"></div>
        </div>
        <p className="absolute bottom-28 text-gray-400">
          Powered by BeyondChats.
        </p>
      </div>
    );
  } else {
    redirect("/dashboard");
  }

  // <Dashboard />
}
