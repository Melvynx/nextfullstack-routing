"use client";
import { use } from "react";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";

import Image from "next/image";
import { PICTURES } from "../../../pictures.data";

export default function Page(props: {
  params: Promise<{
    pictureId: string;
  }>;
}) {
  const params = use(props.params);
  const router = useRouter();

  const picture = PICTURES[Number(params.pictureId) - 1];
  console.log({ params: params.pictureId, picture });

  return (
    <Dialog
      open={true}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Picture {params.pictureId}</DialogTitle>
        </DialogHeader>
        <div>
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
