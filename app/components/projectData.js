"use client";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";
import { useMemo } from "react";
import * as Page from "@/app/components/pageComponents";

export default function ProjectComponent({ projectData }) {
  const episodes = useMemo(() => {
    return projectData?.episodes?.map((episode, index) => ({
      image: episode?.fields?.image?.fields?.file?.url
        ? `https:${episode?.fields?.image?.fields?.file?.url}`
        : null,
      link: episode?.fields?.link,
      title: episode?.fields?.title,
      subtitle: episode?.fields?.subTitle,
    }));
  }, [projectData]);

  const slides = useMemo(() => {
    return (
      projectData?.sliders?.map((slide) => {
        return slide?.fields?.file?.url
          ? `https:${slide.fields.file.url}`
          : null;
      }) || []
    );
  }, [projectData]);

  return (
    <main>
      {!!projectData?.heroCover?.fields?.file?.url && (
        <Page.Placeholder
          $image={`https:${projectData?.heroCover?.fields?.file?.url}`}
        />
      )}

      {!!projectData?.heroVideo && (
        <ResponsivePlayer
          desktop={projectData?.heroVideo}
          mobile={projectData?.heroVideoMobile}
        />
      )}

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            {projectData?.title} <span>{"//"}</span> {projectData?.client}
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              {projectData?.projectScope}
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>{projectData?.approach}</p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p
              dangerouslySetInnerHTML={{
                __html: projectData?.credits?.replace(/\n/g, "<br />"),
              }}
            />
          </Project.ProjectSection>

          {episodes?.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          {projectData?.description}
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          "{projectData?.byAuthor}"
        </p>
        <p className="author">
          - {projectData?.authorName}
          <br />
          {projectData?.authorRole}
        </p>
      </Project.QuoteSection>
    </main>
  );
}
