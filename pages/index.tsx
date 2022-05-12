import type { NextPage } from "next";
import { ProjectCard } from "../components/project-card";
import { ContactCard } from "../components/contact-card";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="font-bold text-4xl">
              Hiya! I&apos;m Sven!{" "}
              <span className="wave">👋</span>
            </div>
            <div className="font-bold">
              An 18 year old full-stack engineer.
            </div>
          </div>
          <div className="text-normal opacity-50">
            Striving to have fun, while also making quality products.
          </div>
        </div>
        <div className="mt-16 flex-col space-y-6">
          <div className="font-bold text-3xl">Highlighted Projects</div>
          <ProjectCard
            Title="neddo.dev"
            Desc="My wonderful personal website made with Next.JS and TailwindCSS"
            Link="https://github.com/neddoo/neddo.dev"
          />
        </div>
        <div className="mt-16 flex-col space-y-6">
          <div className="font-bold text-3xl">Contact</div>
          <div className="grid grid-cols-2 gap-6">
            <ContactCard
              User="Neddoo"
              IconName="akar-icons:github-fill"
              Link="https://github.com/Neddoo"
            />
            <ContactCard
              User="ItsNeddo"
              IconName="akar-icons:twitter-fill"
              Link="https://twitter.com/ItsNeddo"
            />
            <ContactCard
              User="Neddo#0001"
              IconName="akar-icons:discord-fill"
              Link="mailto:me@neddo.dev"
            />
            <ContactCard
              User="me@neddo.dev"
              IconName="akar-icons:envelope"
              Link="https://discordapp.com/users/246895281940070400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
