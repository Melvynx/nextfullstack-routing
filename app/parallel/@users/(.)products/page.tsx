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
        <CardTitle>/parallel/@users/(.)products</CardTitle>
        <CardDescription>Will be show on /parallel/products</CardDescription>
      </CardHeader>
      <CardContent>Some users...</CardContent>
    </Card>
  );
}
