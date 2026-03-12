"use client";

import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import { useEffect, useState } from "react";
import client from "@/utils/contentful";

export default function ProjectsComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({ content_type: "projects" });
        setData(response.items || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Wrap>
      <section id="projects">
        <Page.SectionTitle>Projects</Page.SectionTitle>

        {!!data?.length &&
          data
            .filter((project) => project?.fields?.featured)
            .sort((a, b) => a?.fields?.index - b?.fields?.index)
            .map((project) => (
              <Page.Special key={project?.fields?.title}>
                <Page.SpecialImageContainer
                  href={`/project/${project?.fields?.title.replace(
                    /\s+/g,
                    "-"
                  )}`}
                >
                  <div
                    style={{
                      backgroundImage: project?.fields?.heroImage?.fields?.file
                        ?.url
                        ? `url(https:${project?.fields?.heroImage?.fields?.file?.url})`
                        : null,
                    }}
                  ></div>
                </Page.SpecialImageContainer>

                <Page.Project>
                  <Page.FeaturedProjectTitle>
                    {project?.fields?.title}
                    <br />
                    <span>{project?.fields?.client}</span>
                  </Page.FeaturedProjectTitle>

                  <p>
                    {project?.fields?.description}
                    <br />
                    <br />
                    <a
                      href={`/project/${project?.fields?.title.replace(
                        /\s+/g,
                        "-"
                      )}`}
                    >
                      More &rarr;
                    </a>
                  </p>
                </Page.Project>
              </Page.Special>
            ))}
      </section>

      <section>
        <Page.Projects>
          {!!data?.length &&
            data
              .filter((project) => !project?.fields?.featured)
              .sort((a, b) => a?.fields?.index - b?.fields?.index)
              .map((pro) => (
                <Page.Project key={pro?.title}>
                  <Page.ProjectImageContainer
                    href={`/project/${pro?.fields?.title.replace(/\s+/g, "-")}`}
                  >
                    <div
                      style={{
                        backgroundImage: `url(https:${pro?.fields?.heroImage?.fields?.file?.url})`,
                      }}
                    ></div>
                  </Page.ProjectImageContainer>

                  <Page.ProjectTitle>
                    {pro?.fields?.title}
                    <br />
                    <span>{pro?.client}</span>
                  </Page.ProjectTitle>

                  <p>
                    <a
                      href={`/project/${pro?.fields?.title.replace(
                        /\s+/g,
                        "-"
                      )}`}
                    >
                      More &rarr;
                    </a>
                  </p>
                </Page.Project>
              ))}
        </Page.Projects>
      </section>
    </Wrap>
  );
}
