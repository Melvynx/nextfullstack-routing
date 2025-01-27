import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function page(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const searchParams = await props.searchParams;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Success</CardTitle>
        <CardDescription>{JSON.stringify(searchParams)}</CardDescription>
      </CardHeader>
    </Card>
  )
}
