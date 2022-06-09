import type { NextPage } from "next";
import { ProjectCard } from "../components/cards/project-card";
import { ContactCard } from "../components/cards/contact-card";
import { Footer } from "../components/menu/footer";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="mt-36 w-full"
    >
      <div className="flex flex-col space-y-4">
        <div>
          <div className="font-bold text-4xl">
            Hiya! I&apos;m Sven! <span className="wave">👋</span>
          </div>
          <div className="font-bold">An 18 year old full-stack engineer.</div>
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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
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
            Link="https://discordapp.com/users/246895281940070400"
          />
          <ContactCard
            User="me@neddo.dev"
            IconName="akar-icons:envelope"
            Link="mailto:me@neddo.dev"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
