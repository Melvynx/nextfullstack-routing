import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RSC with Form Action</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-2"
          action={async (formData: FormData) => {
            "use server";

            const username = formData.get("username") as string;
            const email = formData.get("email") as string;

            const searchParams = new URLSearchParams({
              username,
              email,
            });

            const url = `/server-actions/rsc/action/success?${searchParams}`;

            redirect(url);
          }}
        >
          <Input name="username" />
          <Input name="email" />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
