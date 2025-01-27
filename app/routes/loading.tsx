import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer } from "@/components/utils/Timer";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading...</CardTitle>
      </CardHeader>
      <CardContent>
        <Loader2 className="animate-spin" size={32} />
        <Timer />
      </CardContent>
    </Card>
  );
}
