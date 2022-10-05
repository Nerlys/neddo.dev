import type { NextPage } from "next";
import { ProjectCard } from "../components/cards/project-card";
import { ContactCard } from "../components/cards/contact-card";
import { GetStaticProps } from "next";
import { PinnedRepo } from "../hooks/github";
import { useGitHubPinnedRepos } from "../hooks/github";

import { motion } from "framer-motion";

type Props = {
  pinnedRepos: PinnedRepo[];
};

export default function Home(props: Props) {
  const { data: projects = props.pinnedRepos } = useGitHubPinnedRepos("neddoo");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
    >
      <div className="flex flex-col space-y-4">
        <div className="text-3xl font-bold">
          Hiya I&apos;m Sven! <span className="wave">👋</span>
        </div>
        <div className="mb-4 text-xl">An 19 year old full-stack engineer.</div>
        <div className="mb-4 text-lg opacity-50">
          Striving to make quality products, while also having fun
        </div>
      </div>
      <div className="mt-16 flex-col space-y-6">
        <div className="font-bold text-3xl">What I do 👨‍💻</div>
        <div className="text-lg opacity-50">
          Currently I&apos;m studying Software Engineering at a school in The
          Netherlands. In my free time, you can see me working on personal
          projects. I mostly write web based projects. I&apos;ve selected some
          of my favorite projects, which you can see down below!
        </div>
        {projects.map((project: any) => (
          <ProjectCard key={project.repo}
            Title={project.repo}
            Desc={project.description}
            Link={`https://github.com/${project.owner}/${project.repo}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async function () {
  const pinnedRepos = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=neddoo"
  ).then(async (response) => response.json() as Promise<PinnedRepo[]>);

  return {
    props: { pinnedRepos },
    revalidate: 120,
  };
};
