"use server";

export const deleteUser = async (userId: string) => {
  console.log("delete", {
    userId,
  });

  return "deleted";
};

export const updateUser = async (
  userId: string,
  data: {
    username: string;
    email: string;
  },
) => {
  if (data.username === "error") {
    throw new Error("Invalid data");
  }

  const parsed =
    data.username.toLocaleUpperCase() + " x " + data.email.toLocaleUpperCase();

  console.log("update", {
    userId,
    parsed,
  });

  return "updated";
};
