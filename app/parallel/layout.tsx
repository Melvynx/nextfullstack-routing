import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Layout({
  children,
  users,
  invoices,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  invoices: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>/parallel/*</CardTitle>
      </CardHeader>
      <CardContent>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/parallel/products"
        >
          Parallel product
        </Link>
      </CardContent>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {children}
        {users}
        {invoices}
      </CardContent>
    </Card>
  );
}
