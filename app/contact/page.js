import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import * as Contact from "@/app/components/contact";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: "Contact - Starting Eleven",
  description:
    "Want to tell your soccer story? Contact us online or come see us in our Venice or KC location.",
};

export default function ContactPage() {
  return (
    <main>
      <section style={{ paddingTop: "3rem" }}>
        <Wrap>
          <Page.SectionTitle>Locations</Page.SectionTitle>

          <Contact.Locations>
            <div>
              <p>
                1800 Genessee Street. STE 102
                <br />
                Kansas City, MO 64102
                <br />
                <a
                  href="https://maps.app.goo.gl/qFpCzHbrT6APfM5M9"
                  target="_blank"
                >
                  Get directions &rarr;
                </a>
              </p>
            </div>

            <div>
              <p>
                27 Market Street
                <br />
                Venice, CA 90291
                <br />
                <a
                  href="https://maps.app.goo.gl/dWbFicy36Ponav6z6"
                  target="_blank"
                >
                  Get directions &rarr;
                </a>
              </p>
            </div>
          </Contact.Locations>
        </Wrap>
      </section>

      <Page.GrayBackground style={{ marginBottom: 0 }}>
        <Wrap>
          <section>
            <Contact.Title>Contact</Contact.Title>
            <p>
              Reach out via email (hello@startingeleven.com) or fill out this
              form.
            </p>

            <ContactForm />
          </section>
        </Wrap>
      </Page.GrayBackground>
    </main>
  );
}
