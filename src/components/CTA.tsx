import DemoInput from "./DemoInput";

export default function CTA() {
  return (
    <section
      className="
        flex w-full p-5 items-center gap-5 px-30
        max-md:flex-col
        max-md:px-4
        max-md:py-8
      "
    >
      <div className="flex-1 max-md:text-center">
        <h2 className="text-(--mirage-blue)">Ready to start?</h2>

        <p className="text-(--light-san-juan-blue) mt-8 text-justify leading-loose max-md:text-center max-md:mt-4"></p>
      </div>

      <div className="flex-1 max-md:w-full">
        <DemoInput />
      </div>
    </section>
  );
}
