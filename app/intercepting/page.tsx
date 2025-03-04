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
        <CardTitle>/intercepting</CardTitle>
        <CardDescription>base intercepting page</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/intercepting/pictures/1"
        >
          pictures 1
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/intercepting/pictures/2"
        >
          pictures 2
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/intercepting/pictures/3"
        >
          pictures 3
        </Link>
      </CardContent>
    </Card>
  );
}
