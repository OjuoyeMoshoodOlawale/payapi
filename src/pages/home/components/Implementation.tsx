import Implementation_code from "../../../assets/Implementation_code.png";
export default function Implementation() {
  return (
    <section className="flex w-full p-5 items-center gap-5 px-30">
      <div className="flex-1">
        <img src={Implementation_code} alt="" className="w-full" />
      </div>
      <div className="flex-1">
        <h2 className="text-(--mirage-blue)">Easy to implement</h2>
        <p className="text-(--light-san-juan-blue) mt-8 text-justify leading-loose">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </section>
  );
}
