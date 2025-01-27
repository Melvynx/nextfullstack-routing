import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Title Page",
  description: "Some description",

  openGraph: {
    title: "Title Page",
    description: "Some description",
  },

  twitter: {
    card: "summary_large_image",
  }
}

export default function Home() {
  return <p>...</p>
}
