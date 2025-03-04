"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-fit"
      onClick={() => {
        router.back();
      }}
    >
      Back
    </Button>
  );
};
