import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { BackButton } from "@/components/utils/BackButton";

import Image from "next/image";
import { PICTURES } from "../../pictures.data";

export default async function Page(props: {
  params: Promise<{
    pictureId: string;
  }>;
}) {
  const params = await props.params;
  const picture = PICTURES[Number(params.pictureId) - 1];
  return (
    <Card>
      <CardHeader>
        <BackButton />
        <CardTitle>/parallel/pictures/[pictureId]</CardTitle>
        <CardDescription>Base parallel page</CardDescription>
      </CardHeader>
      <CardContent>
        {picture ? (
          <Image
            width={100}
            height={100}
            src={picture}
            alt="some photo"
            className="w-full h-auto"
          />
        ) : (
          <Typography>No photo</Typography>
        )}
      </CardContent>
    </Card>
  );
}
