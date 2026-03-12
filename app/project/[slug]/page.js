import ProjectComponent from "@/app/components/projectData";
import client from "@/utils/contentful";
import Head from "next/head";

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const modifiedSlug = slug.replace(/-/g, " ");

  // Fetch project data from Contentful based on the slug
  const response = await client.getEntries({
    content_type: "projects",
    "fields.title": modifiedSlug,
  });

  const project = response.items[0]?.fields;
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project?.metaTitle || project?.metaTitle}</title>
        <meta
          name="description"
          content={project?.metaDescription || project?.metaDescription}
        />
      </Head>
      <ProjectComponent projectData={project} />
    </>
  );
}
