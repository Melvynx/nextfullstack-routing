"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

import { deleteUser, updateUser } from "./action";

/* 
fetch("http://localhost:3000/server-actions/rcc", {
  method: "POST",
  headers: {
    "Next-Action": "2f3d1d2d3c8a5131e62450f9ceb9787847f42883",
    "Content-Type": "text/plain;charset=UTF-8",
  },
  body: JSON.stringify([
    "id",
    {
      username: "test",
      email: "test",
    },
  ]),
})
  .then((res) => res.text())
  .then(console.log)
*/

export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;

    try {
      await updateUser("id", {
        username,
        email,
      });

      alert("User successfully updated");
    } catch (e: unknown) {
      const error = e as Error;
      alert(error.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>RCC with Server Action</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography>Delete</Typography>
        <Button
          onClick={async () => {
            await deleteUser("1");

            alert("User successfully deleted");
          }}
        >
          Delete
        </Button>
        <Typography>Update</Typography>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(new FormData(e.currentTarget));
          }}
        >
          <Input name="username" />
          <Input name="email" />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
