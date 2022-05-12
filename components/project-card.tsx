import { ReactNode, ReactText } from "react";

export function ProjectCard({
  Title,
  Desc,
  Link,
}: {
  Title: ReactNode;
  Desc: ReactNode;
  Link: string;
}) {
  return (
    <>
      <div>
        <a href={Link}>
          <div className="p-5 border-2 rounded-xl hover:border-green-400 duration-300 cursor-pointer">
            <div className="font-bold text-lg">{Title}</div>
            <div className="opacity-50">{Desc}</div>
          </div>
        </a>
      </div>
    </>
  );
}
