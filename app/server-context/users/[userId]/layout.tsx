import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PropsWithChildren } from "react";
import { getServerContextData } from "../../utils";

export default async function UserLayout(props: PropsWithChildren) {
  const data = await getServerContextData("2");
  return (
    <Card>
      <CardHeader>Layout /server-context/users/[userId]</CardHeader>
      <CardContent>{props.children}</CardContent>
      <CardFooter>
        <p>{data.data}</p>
      </CardFooter>
    </Card>
  );
}
