import hero_img from "../../../assets/hero-img.png";
import DemoInput from "../../../components/DemoInput";

export default function Hero() {
  return (
    <section
      className="
        flex w-full flex-1 margin-auto pl-30 my-1 gap-15
        max-md:flex-col-reverse
        max-md:pl-4
        max-md:gap-8
      "
    >
      <div
        className="
          flex-1 item-cemter justify-center flex flex-col
          max-md:items-center
          max-md:text-center
        "
      >
        <h1 className="max-md:text-2xl">
          Start building with our APIs for absolutely free.
        </h1>

        <DemoInput />

        <p className="m-5">
          Have any questions? <strong>Contact Us</strong>
        </p>
      </div>

      <div className="flex-1 max-md:flex max-md:justify-center">
        <img
          src={hero_img}
          alt="hero image"
          className="
            h-4/12
            md:h-4/5
            md:max-w-md
            max-md:h-auto
            max-md:w-4/5
          "
        />
      </div>
    </section>
  );
}
