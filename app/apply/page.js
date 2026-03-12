import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import * as Contact from "@/app/components/contact";
import ApplyForm from "../components/applyForm";

export const metadata = {
  title: "LA Studio - Starting Eleven",
  description:
    "Want to tell your soccer story? Contact us online or come see us in our Venice or KC location.",
};

export default function ContactLanding() {
  return (
    <main>
      <Page.GrayBackground style={{ marginBottom: 0 }}>
        <Wrap>
          <section>
            <Contact.Title>Application Form</Contact.Title>
            <p>
              Application to apply for a position or provide contractor info
            </p>
            <ApplyForm />
          </section>
        </Wrap>
      </Page.GrayBackground>
    </main>
  );
}
