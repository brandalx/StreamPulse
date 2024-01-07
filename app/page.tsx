"use client";
import { UserButton } from "@clerk/clerk-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
