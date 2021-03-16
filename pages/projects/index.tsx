import Head from "next/head";
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/material.css";
import Header from "../../components/Header";

type Data = ProjectProps[];

type State = {
  loading: boolean;
  data: Data;
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<State>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    fetch("https://api.github.com/users/manen/repos")
      .then(a => a.json())
      .then(data => {
        setRepos({
          loading: false,
          data: data.map(
            (repo: {
              name: string;
              description: string;
              html_url: string;
              language: string;
            }) => {
              return {
                title: repo.name,
                desc: repo.description,
                link: repo["html_url"],
                lang: repo.language,
              };
            }
          ),
        });
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Projects - manen</title>
      </Head>
      <Header />
      <div className="m-4">
        <h1 className="text-2xl">Projects</h1>
        <div>
          <h1 className="m-4 text-l"></h1>
          <div className="m-4 flex flex-wrap"></div>
        </div>
        <div>
          <h1>All</h1>
          <div className="m-4 flex flex-wrap">
            {repos.data.map(repo => (
              <Project
                key={Math.random()}
                title={repo.title}
                desc={repo.desc}
                lang={repo.lang}
                link={repo.link}
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
  link: string;
};

const Project: React.FC<ProjectProps> = props => (
  <a target="_blank" href={props.link}>
    <Tippy content={<p>{props.desc}</p>}>
      <div
        title={props.desc}
        className="m-4 w-48 h-24 bg-gray-200 hover:bg-gray-300 dark:bg-nice-800 dark:hover:bg-nice-700 rounded-lg transition flex items-center justify-center">
        <h1 className="text-lg">{props.title}</h1>
      </div>
    </Tippy>
  </a>
);

export default Projects;
