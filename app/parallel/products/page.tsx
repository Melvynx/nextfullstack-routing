import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThrowButton } from "@/components/utils/ThrowButton";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>/parallel/products</CardTitle>
        <CardDescription>Base parallel product page</CardDescription>
      </CardHeader>
      <CardContent>
        <ThrowButton />
      </CardContent>
    </Card>
  );
}
