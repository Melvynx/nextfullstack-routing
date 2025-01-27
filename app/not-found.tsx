import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>404 - Not found</CardTitle>
        <CardDescription>
          The page you are looking for does not exist.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/"
        >
          Home
        </Link>
      </CardContent>
    </Card>
  );
}
