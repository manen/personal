import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import { Octokit } from "@octokit/rest";
import Link from "next/link";

type Data = {
  title: string;
  desc: string;
  archived: boolean;
  lang: string;
  branch: string;
  parent?: string;
};

type State = {
  loading: boolean;
  data: Data;
};

type ReadmeState = {
  loading: boolean;
  data: string;
};

const octokit = new Octokit();

const Slug: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return <div>Loading</div>;

  const [repo, setRepo] = useState<State>({
    loading: true,
    data: {
      title: "Loading",
      desc: "Please wait",
      archived: false,
      lang: "bruh",
      branch: "main",
    },
  });

  useEffect(() => {
    if (!slug) return;

    octokit.repos
      .get({
        owner: "manen",
        repo: typeof slug == "string" ? slug : slug.join(""),
      })
      .then(({ data }) => {
        setRepo({
          loading: false,
          data: {
            title: data.name,
            desc: data.description || "",
            archived: data.archived,
            lang: data.language || "",
            branch: data["default_branch"],
          },
        });
      });
  }, []);

  return (
    <div>
      <Head>
        <title>{repo.data.title} - manen</title>
        <meta name="description" content={"Project " + slug + " by manen"} />
      </Head>
      <Header />
      <div className="p-4 bg-accent-100 dark:bg-accent-800">
        <div>This project is imported from GitHub.</div>
        <div className="text-xs text-accent-500 dark:text-accent-400">
          <a
            target="_blank"
            href={"https://github.com/manen/" + repo.data.title}>
            Open on GitHub
          </a>
        </div>
      </div>
      {repo.data.archived ? (
        <div className="p-4 text-black bg-yellow-300">
          This project is archived.
        </div>
      ) : null}
      <div className="m-4">
        <div className="m-4 flex flex-row justify-center items-center">
          <div className="p-2 transition-colors bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 rounded-lg cursor-pointer">
            <Link href={"/donate?s=" + repo.data.title}>Sponsor</Link>
          </div>
          <div className="flex-1 flex-row">
            <p className="text-xl">{repo.data.desc}</p>
          </div>
          <nav>
            <span className="m-2">{repo.data.lang}</span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Slug;
