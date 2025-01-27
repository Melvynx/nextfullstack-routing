import { cookies } from "next/headers"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Typography } from "@/components/ui/typography"

export default async function Page() {
  const cookieStore = await cookies()
  return (
    (<Card>
      <CardHeader>
        <CardTitle>Cookies</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {cookieStore.getAll().map((cookie) => (
          <form key={cookie.name}>
            <div className="rounded border-2 border-dashed p-4">
              <Typography>
                Name: <Typography variant="code">{cookie.name}</Typography>
              </Typography>
              <Typography>
                Value: <Typography variant="code">{cookie.value}</Typography>
              </Typography>
              <Button
                size="sm"
                className="m-2"
                variant="secondary"
                formAction={async () => {
                  "use server"

                  const cookieStoreSet = await cookies()

                  cookieStoreSet.delete(cookie.name)
                }}
              >
                Delete
              </Button>
            </div>
          </form>
        ))}
        {/* Server Action */}
        <form
          className="flex flex-col gap-2 rounded border-2 border-dashed p-4"
          action={async (formData: FormData) => {
            "use server"

            const cookieStoreSet = await cookies()

            cookieStoreSet.set(
              formData.get("name") as string,
              formData.get("value") as string
            )
          }}
        >
          <Typography variant="h3">Add new cookie</Typography>
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="value">Value</Label>
            <Input id="value" name="value" />
          </div>
          <Button type="submit">Set Cookie</Button>
        </form>
      </CardContent>
    </Card>)
  );
}
