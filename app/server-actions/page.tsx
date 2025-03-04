import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IndexPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>/server-actions</CardTitle>
        <CardDescription>The server actions routing base.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/server-actions/rsc/action"
        >
          RSC with Action
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/server-actions/rsc/form-action"
        >
          RSC with Form Action
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
          href="/server-actions/rcc"
        >
          RCC with Server Actions
        </Link>
      </CardContent>
    </Card>
  );
}
