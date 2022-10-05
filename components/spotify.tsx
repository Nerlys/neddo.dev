import React from "react";
import { useLanyard } from "use-lanyard";
import { Icon } from "@iconify/react";

export const DISCORD_ID = "246895281940070400";

export function Song() {
  const { data: user } = useLanyard(DISCORD_ID);

  const c =
    "text-left select-none sm:select-text w-full inline-flex rounded-sm focus:outline-none focus:opacity-100 focus:ring items-center space-x-2 no-underline opacity-50 hover:opacity-100 duration-200 h-12";

  if (!user || !user.spotify) {
    return (
      <p className={c}>
        <span>
          <Icon icon='bi:spotify' />
        </span>
        <span>The sound... of silence</span>
      </p>
    );
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={c}
      href={`https://open.spotify.com/track/${user.spotify.track_id}`}
    >
      <span>
        <Icon icon='bi:spotify' />
      </span>
      <span className="truncate">
        Listening to {user.spotify.song} by {user.spotify.artist}
      </span>
    </a>
  );
}