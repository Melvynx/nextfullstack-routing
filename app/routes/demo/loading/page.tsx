import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function page() {
  // wait 10 secondes
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 4000);
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>/routes/demo/loading</CardTitle>
        <CardDescription>
          You can only see this after 4 seconds.
        </CardDescription>
      </CardHeader>
      <CardContent>Some site content</CardContent>
    </Card>
  );
}
