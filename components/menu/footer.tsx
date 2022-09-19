import { Song } from "../spotify";
import NextLink from "next/link";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <>
      <div className="mt-20 mb-10 border-t-2 flex justify-between">
        <div className="mt-3 flex justify-between">
          <Song />
        </div>
      </div>
    </>
  );
}