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
        <CardTitle>/groups/(admin)/users</CardTitle>
        <CardDescription>List of users</CardDescription>
      </CardHeader>
      <CardContent>Some users...</CardContent>
    </Card>
  );
}
