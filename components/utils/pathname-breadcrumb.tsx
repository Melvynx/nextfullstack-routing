"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PathnameBreadcrumb() {
  const pathname = usePathname();

  // Split pathname into segments and remove empty strings
  const segments = pathname?.split("/").filter(Boolean) || [];

  return (
    <Breadcrumb>
      <BreadcrumbList className="rounded-lg border border-border bg-background px-3 py-2 shadow-sm shadow-black/5">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          // Create the href for this segment by joining all segments up to this point
          const href = `/${segments.slice(0, index + 1).join("/")}`;

          // Capitalize and clean up segment name for display
          const displayName = segment;

          return (
            <div key={segment} className="flex items-center gap-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {/* If it's the last segment, show as current page */}
                {index === segments.length - 1 ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
