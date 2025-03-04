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
        <CardTitle>/groups/(admin)/dashboard</CardTitle>
        <CardDescription>Some dashboard</CardDescription>
      </CardHeader>
      <CardContent>Some graph and more...</CardContent>
    </Card>
  );
}
