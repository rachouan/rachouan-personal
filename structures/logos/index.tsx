"use client";

import Anchor from "@/components/anchor";
import Container from "@/components/container";
import BarkBuildings from "./bark-buildings.svg";
import Coinbits from "./coinbits.svg";
import Remedymeds from "./remedymeds.svg";
import Dogstudio from "./dogstudio.svg";
import Winamp from "./winamp.svg";
import HauteHijab from "./haute-hijab.svg";

const logos = [
  {
    alt: "coinbits",
    logo: Coinbits,
    href: "https://coinbits.app",
  },
  {
    alt: "remedymeds",
    logo: Remedymeds,
    href: "https://remedymeds.com",
  },
  {
    alt: "dogstudio",
    logo: Dogstudio,
    href: "https://dogstudio.co",
  },
  {
    alt: "bark-buildings",
    logo: BarkBuildings,
    href: "https://barkbuildings.com",
  },
  {
    alt: "winamp",
    logo: Winamp,
    href: "https://winamp.com",
  },
  {
    alt: "haute-hijab",
    logo: HauteHijab,
    href: "https://hautehijab.com",
  },
];

export default function Logos() {
  return (
    <Container size="xl" className="px-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-y-12 gap-x-12 md:gap-y-20 md:gap-x-20">
        {logos.map(({ logo: Logo, alt, href }, i) => (
          <Anchor
            key={`logo-${i}`}
            href={href}
            target="_blank"
            className="opacity-40 hover:opacity-100 flex items-center justify-center"
          >
            <Logo className="fill-gray-900 dark:fill-white h-8 md:h-12 w-auto" />
          </Anchor>
        ))}
      </div>
    </Container>
  );
}
