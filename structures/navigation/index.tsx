import Link from "next/link";
import Button from "../../components/button";
import Container from "../../components/container";
import Logo from "../../components/logo";
import { Socials } from "../socials";
import { ModeToggle } from "./mode";

export function Navigation() {
  return (
    <nav className="sticky top-0 left-0 right-0 p-2 z-50">
      <Container
        size="fluid"
        className="bg-gray-50/10 dark:bg-gray-900/50 rounded-lg border backdrop-blur-md transition border-b border-gray-900/10 dark:border-gray-700"
      >
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-10 fill-gray-900 dark:fill-white" />
            <h1 className="font-rachouan font-semibold text-2xl hidden md:inline">
              Rachouan
            </h1>
          </Link>

          <nav className="flex divide-x divide-gray-50 dark:divide-gray-700">
            <div className="flex items-center gap-4 px-4">
              <Socials />
              <Button
                as={"a"}
                href="/book"
                variant="primary"
                className="hidden md:inline-flex"
              >
                {`Let's Talk`}
              </Button>
            </div>
            <div className="pl-4">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </nav>
  );
}
