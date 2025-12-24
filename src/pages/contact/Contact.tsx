import CTA from "../../components/CTA";
import ContactForm from "./components/ContactForm";
import Innovators from "./components/Innovators";

export default function Contact() {
  return (
    <>
      <section className="max-md:px-4 max-md:py-6">
        <h1 className="ml-24 w-3/4 max-md:mx-4 max-md:w-full max-md:text-center">
          Submit a help request and we’ll get in touch shortly.
        </h1>

        <div
          className="
            flex mt-15 gap-15
            max-md:flex-col
            max-md:gap-6
            max-md:items-center
          "
        >
          <div className="flex-1 max-md:w-full">
            <ContactForm />
          </div>

          <div className="flex-1 max-md:w-full max-md:mt-4">
            <Innovators />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
