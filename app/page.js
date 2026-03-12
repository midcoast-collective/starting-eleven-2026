import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import ResponsivePlayer from "@/app/components/responsivePlayer";
import ProjectsComponent from "@/app/components/projects";

export const metadata = {
  title: "Starting Eleven - Setting the standard for soccer storytelling",
  description: "Setting the standard for soccer storytelling.",
};

export default async function AboutPage() {
  return (
    <main>
      <section>
        <ResponsivePlayer
          desktop="https://vimeo.com/854736625"
          mobile="https://vimeo.com/857607311"
        />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section id="about">
            <Page.SectionTitle as="h1">About Us</Page.SectionTitle>
            <Page.About>
              <div>
                <h3>Setting the standard for soccer storytelling.</h3>
                <p>
                  <br />
                  It&apos;s not a game. It&apos;s art.
                </p>
                <p>
                  Starting Eleven is the leading soccer-specific production
                  agency in the United States. From conception to
                  post-production, we deliver authentic stories rooted in
                  respect for the sport — and everyone who loves it. We elevate
                  narratives for athletes, clubs, leagues, and brands by
                  connecting artist to artist.
                </p>
                <p>
                  Starting Eleven has covered everything from the World Cup and
                  the cover of EAFC (previously FIFA) to every significant
                  soccer game played in the United States. We are a bilingual,
                  multicultural team of soccer enthusiasts.
                </p>
                <p>This is our passion, not just another job.</p>
              </div>

              <Page.AboutImageContainer />
            </Page.About>
          </section>
        </Wrap>
      </Page.GrayBackground>

      <ProjectsComponent />
    </main>
  );
}
