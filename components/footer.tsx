import { Song } from "./spotify";
import NextLink from "next/link";

export function Footer() {
  return (
    <>
      <div className="mt-20 mb-10 border-t-2">
        <div className="mt-5">
          <Song />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="grid grid-flow-row gap-3">
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"./"}>Home</NextLink></div>
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"/about"}>About</NextLink></div>
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"/blog"}>Blog</NextLink></div>
          </div>
          <div className="grid grid-flow-row gap-3">
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"https://github.com/Neddoo"}>Github</NextLink></div>
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"https://twitter.com/ItsNeddo"}>Twitter</NextLink></div>
            <div className="opacity-50 hover:opacity-100 duration-200"><NextLink href={"mailto:me@neddo.dev"}>E-Mail</NextLink></div>
          </div>
        </div>
      </div>
    </>
  );
}