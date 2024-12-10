"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserProfile } from "../profile/user-profile";
import { sidebar } from "@/app/utlis/constants";
import { cn } from "@/lib/utils";

export function DashboardItems() {
  const pathname = usePathname();
  return (
    <div className="flex-1 flex flex-col items-center justify-between space-y-3 py-4">
      {sidebar.map((items, idx) => (
        <Link
          href={items.href}
          className={cn(
            `p-4 rounded-full`,
            pathname === items.href
              ? "border bg-zinc-300 dark:bg-zinc-700  dark:hover:bg-zinc-800"
              : "hover:bg-zinc-700 border dark:border-zinc-700"
          )}
          key={idx}
        >
          <items.icon />
        </Link>
      ))}

      <div className="absolute bottom-5">
        <UserProfile />
      </div>
    </div>
  );
}
