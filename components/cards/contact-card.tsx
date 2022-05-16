import { ReactNode, ReactText } from "react";
import { Icon } from "@iconify/react";

export function ContactCard({
  User,
  IconName,
  Link,
}: {
  User: ReactNode;
  IconName: string;
  Link: string;
}) {
  return (
    <>
      <div>
        <a href={Link}>
          <div className="p-5 border-2 rounded-xl hover:border-green-400 duration-300 cursor-pointer items-center flex">
            <div className="flex flex-row space-x-2">
              <Icon className="text-xl" icon={IconName} />
              <div>{User}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
