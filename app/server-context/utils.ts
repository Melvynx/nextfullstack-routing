import { unstable_cache as cache } from "next/cache";

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getServerContextData = cache(
  async (secret?: string) => {
    const requestId = generateRandomNumber(1, 100);
    console.log(`getServerContextData-${requestId}-${secret ?? "no-secret"}`);
    return {
      data: `FETCHED_DATA-${requestId}-${secret ?? "no-secret"}`,
    };
  },
  ["server-context-data"],
  {
    revalidate: 10,
    tags: ["test-tag"],
  },
);
