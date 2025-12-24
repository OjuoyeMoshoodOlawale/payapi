import uiux from "../../../assets/uiux.png";

export default function UiUx() {
  return (
    <section
      className="
        flex w-full p-5 items-center gap-5 px-30
        max-md:flex-col-reverse
        max-md:px-4
        max-md:text-center
      "
    >
      <div className="flex-1">
        <h2 className="text-(--mirage-blue)">Simple UI & UX</h2>

        <p
          className="
            text-(--light-san-juan-blue) mt-8 text-justify leading-loose
            max-md:mt-4
            max-md:text-center
          "
        >
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>

      <div className="flex-1">
        <img src={uiux} className="w-full max-md:max-w-sm max-md:mx-auto" />
      </div>
    </section>
  );
}
