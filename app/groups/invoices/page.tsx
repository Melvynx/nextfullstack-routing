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
        <CardTitle>/groups/invoices</CardTitle>
        <CardDescription>List of invoices</CardDescription>
      </CardHeader>
      <CardContent>Some invoices...</CardContent>
    </Card>
  );
}
