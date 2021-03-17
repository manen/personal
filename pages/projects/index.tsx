import Head from "next/head";
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/material.css";
import Header from "../../components/Header";
import Link from "next/link";
import { Octokit } from "@octokit/rest";

type Data = ProjectProps[];

type State = {
  loading: boolean;
  data: Data;
};

const octokit = new Octokit();

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<State>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    octokit.repos
      .listForUser({
        username: "manen",
        sort: "updated",
      })
      .then(({ data }) => {
        setRepos({
          loading: false,
          data: data
            .filter(repo => {
              return !repo.archived;
            })
            .map(repo => {
              return {
                title: repo.name,
                desc: repo.description || "",
                lang: repo.language || "",
                archived: repo.archived,
              };
            }),
        });
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Projects - manen</title>
        <meta name="description" content="manen's projects" />
      </Head>
      <Header />
      <div className="m-4">
        <h1 className="text-2xl">Projects</h1>
        <div>
          <h1 className="m-4 text-l"></h1>
          <div className="m-4 flex flex-wrap"></div>
        </div>
        <div>
          <h1 className="m-4 mb-0 text-l">All</h1>
          <p className="text-xs">Taken from my GitHub</p>
          <div className="m-4 flex flex-wrap">
            {repos.data.map(repo => (
              <Project
                key={Math.random()}
                title={repo.title}
                desc={repo.desc}
                lang={repo.lang}
                link={"/projects/" + repo.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type ProjectProps = {
  title: string;
  desc: string;
  lang: string;
  link?: string;
};

const Project: React.FC<ProjectProps> = props => (
  <Tippy content={<p>{props.desc}</p>}>
    <Link href={props.link || ""}>
      <div
        title={props.desc}
        className="m-4 w-48 h-24 bg-accent-100 hover:bg-accent-200 dark:bg-accent-800 dark:hover:bg-accent-700 rounded-lg transition flex items-center justify-center cursor-pointer">
        <h1 className="text-lg">{props.title}</h1>
      </div>
    </Link>
  </Tippy>
);

export default Projects;
