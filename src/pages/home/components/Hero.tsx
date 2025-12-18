import hero_img from "../../../assets/hero-img.png";
import DemoInput from "../../../components/DemoInput";

export default function Hero() {
  return (
    <section className="flex w-full flex-1 margin-auto pl-30 my-1 gap-15">
      <div className="flex-1 item-cemter justify-center flex flex-col">
        <h1>Start building with our APIs for absolutely free.</h1>
        <DemoInput   />
        <p className="m-5">
          Have any questions? <strong>Contact Us</strong>
        </p>
      </div>
      <div className="flex-1 ">
        <img src={hero_img} alt="hero image" className="h-6/7" />
      </div>
    </section>
  );
}
