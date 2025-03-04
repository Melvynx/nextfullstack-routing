"use client";

import { Button } from "../ui/button";

export const ThrowButton = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        throw new Error("This is an error thrown from a button");
      }}
    >
      THROW
    </Button>
  );
};
