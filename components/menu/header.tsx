import { ThemeSwitcher } from "../buttons/theme-switcher";

import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import { Icon } from "@iconify/react";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive ? "opacity-100" : "opacity-50",
          "md:inline-block p-1 sm:px-3 hover:opacity-100 sm:py-2 rounded-lg transition-all"
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export function Header() {
  return (
    <>
      <div className="flex justify-between py-5 mb-20">
        <div className="flex items-center">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/portfolio" text="Portfolio" />
        </div>
        <div className="flex space-x-3 text-xl items-center">
          <div className="opacity-50 hover:opacity-100 duration-200">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Neddoo"
            >
              <Icon icon="akar-icons:github-fill" />
            </a>
          </div>
          <div className="opacity-50 hover:opacity-100 duration-200">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ItsNeddo"
            >
              <Icon icon="akar-icons:twitter-fill" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
