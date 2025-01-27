import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default function page() {
  throw new Error("This is an error");
  return (
    <Card>
      <CardHeader>
        <CardTitle>/parallel/@users</CardTitle>
        <CardDescription>List of users</CardDescription>
      </CardHeader>
      <CardContent>Some users...</CardContent>
    </Card>
  );
}
