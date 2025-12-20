import CTA from "../../components/CTA";
import ContactForm from "./components/ContactForm";
import Innovators from "./components/Innovators";

export default function Contact() {
  return (
    <>
      <section>
        <h1 className="ml-24 w-3/4">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="flex mt-15 gap-15 ">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1">
            <Innovators />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
