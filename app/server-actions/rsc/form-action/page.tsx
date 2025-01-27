import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RSC with Form Action</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <Button
            type="submit"
            formAction={async () => {
              "use server";

              console.log("Delete button clicked");
            }}
          >
            Delete
          </Button>
          <Button
            type="submit"
            formAction={async () => {
              "use server";

              console.log("Update button clicked");
            }}
          >
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
