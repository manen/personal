import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";

type Data = {
  title: string;
  desc: string;
  archived: boolean;
  lang: string;
  branch: string;
};

type State = {
  loading: boolean;
  data: Data;
};

type ReadmeState = {
  loading: boolean;
  data: string;
};

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

  const [readme, setReadme] = useState<ReadmeState>({
    loading: true,
    data: "",
  });

  ("https://raw.githubusercontent.com/manen/website-really-old/main/README.md");

  useEffect(() => {
    fetch("https://api.github.com/repos/manen/" + slug)
      .then(a => a.json())
      .then(data => {
        setRepo({
          loading: false,
          data: {
            title: data.name,
            desc: data.description,
            archived: data.archived,
            lang: data.language,
            branch: data["default_branch"],
          },
        });
      });
  }, []);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/manen/" + slug + "@latest/README.md")
      .then(a => a.text())
      .then(data => {
        setReadme({
          loading: false,
          data,
        });
      });
  }, []);

  if (repo.loading) return <div>bruh</div>;
  return (
    <div>
      <Head>
        <title>{repo.data.title} - manen</title>
      </Head>
      <Header />
      {repo.data.archived ? (
        <div className="p-4 text-black bg-yellow-300">
          This project is archived.
        </div>
      ) : null}
      <div className="m-4">
        <div className="m-4 flex flex-row justify-center items-center">
          <h1>{repo.data.title}</h1>
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
