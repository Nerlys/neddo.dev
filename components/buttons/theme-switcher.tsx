import { useTheme } from "next-themes";
import { useMemo } from "react";
import { Icon } from "@iconify/react";

import { ThemeType } from "../../types/theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = useMemo(() => {
    if (theme === ThemeType.SYSTEM) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return theme === ThemeType.DARK;
  }, [theme]);

  return (
    <div
      className="flex p-2 rounded-xl border-2 hover:border-green-400 duration-200 hover:cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Icon
        className="font-bold text-xl"
        icon={isDark ? "feather:sun" : "feather:moon"}
      />
    </div>
  );
}
