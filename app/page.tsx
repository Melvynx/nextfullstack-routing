import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>/</CardTitle>
        <CardDescription>The home page of {siteConfig.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/routes"
        >
          Routing files
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/groups"
        >
          Groups
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/parallel"
        >
          Parallel
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/intercepting"
        >
          Intercepting
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/cookies"
        >
          Cookies
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/headers"
        >
          Headers
        </Link>

        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/server-actions"
        >
          Server Actions
        </Link>
      </CardContent>
    </Card>
  );
}
