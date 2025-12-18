import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import tweeter from "../assets/tweeter.png";
export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-(--mirage-blue) text-white  text-center  flex">
      <div className="flex-1"></div>
      <div className="flex-1 flex  justify-center items-center p-4 gap-10">
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={tweeter} alt="" />
        </a>
        <a href="#">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </footer>
  );
}
