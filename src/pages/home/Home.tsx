import CTA from "../../components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Implementation from "./components/Implementation";
import OurClients from "./components/OurClients";
import UiUx from "./components/UiUx";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <Implementation />
      <UiUx />
      <Features />
      <CTA />
    </>
  );
}
