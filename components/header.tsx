import { ThemeSwitcher } from "../components/buttons/theme-switcher";

import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

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
        <div className="flex items-center space-x-2">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/blog" text="Blog" />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
