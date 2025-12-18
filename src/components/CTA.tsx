import DemoInput from "./DemoInput";
export default function CTA() {
  return (
    <section className="flex w-full p-5 items-center gap-5 px-30">
      <div className="flex-1">
        <h2 className="text-(--mirage-blue)">Ready to start?</h2>
        <p className="text-(--light-san-juan-blue) mt-8 text-justify leading-loose"></p>
      </div>
      <div className="flex-1">
        <DemoInput />
      </div>
    </section>
  );
}
