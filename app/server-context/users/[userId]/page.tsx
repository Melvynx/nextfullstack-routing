import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { revalidateTag } from "next/cache";
import { getServerContextData } from "../../utils";

export default async function UserPage() {
  const data = await getServerContextData("1");
  return (
    <Card>
      <CardHeader>Page /server-context/users/[userId]</CardHeader>
      <CardContent>Data : {data.data}</CardContent>
      <CardFooter>
        <form>
          <Button
            formAction={async () => {
              "use server";
              revalidateTag("test-tag");
            }}
          >
            Revalidate
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
