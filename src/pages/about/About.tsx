import CTA from "../../components/CTA";
import CultureAndPeople from "../contact/components/CultureAndPeople";
import MissionAndVission from "./components/MissionAndVission";
import StatisticData from "./components/StatisticData";
export default function About() {
  return (
    <>
      <MissionAndVission />
      <StatisticData />
      <CultureAndPeople />
      <CTA />
    </>
  );
}
