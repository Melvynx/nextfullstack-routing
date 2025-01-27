import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/groups/dashboard"
        >
          Groups dashboard
        </Link>

        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/groups/users"
        >
          Groups Users
        </Link>

        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/groups/invoices"
        >
          Groups invoices
        </Link>
      </div>
      {children}
    </div>
  );
}
