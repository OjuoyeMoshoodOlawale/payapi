import uiux from "../../../assets/uiux.png";
export default function UiUx() {
  return (
    <section className="flex w-full p-5 items-center gap-5 px-30">
      <div className="flex-1">
        <h2 className="text-(--mirage-blue)">Simple UI & UX</h2>
        <p className="text-(--light-san-juan-blue) mt-8 text-justify leading-loose">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
      <div className="flex-1">
        <img src={uiux} />
      </div>
    </section>
  );
}
