import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>/routes</CardTitle>
        <CardDescription>
          You can only see this after 10 seconds.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/routes/demo/loading"
        >
          /routes/demo/loading
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/routes/demo/error"
        >
          /routes/demo/error
        </Link>
      </CardContent>
    </Card>
  );
}
