import { headers } from "next/headers";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
  const headerList = await headers();

  const jsx = [];

  for (const [key, value] of headerList.entries()) {
    jsx.push(
      <div key={key} className="rounded border-2 border-dashed p-4">
        <Typography>
          Name: <Typography variant="code">{key}</Typography>
        </Typography>
        <Typography>
          Value: <Typography variant="code">{value}</Typography>
        </Typography>
      </div>,
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Headers</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{jsx}</CardContent>
    </Card>
  );
}
