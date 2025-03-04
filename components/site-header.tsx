import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <header className="px-2 py-3 border-b border-accent flex items-center gap-2">
      <Image src="/logo.png" alt="NextFullStack" width={32} height={32} />
      <Link href="/" className="font-bold font-mono">
        NextFullStack
      </Link>
      <div className="flex-1" />
      <Link
        href="https://to.codeline.app/nextfullstack"
        className={buttonVariants({ size: "icon", variant: "outline" })}
      >
        <ExternalLink size={16} />
      </Link>
      <ThemeToggle />
    </header>
  );
};
