import facebook from "../assets/facebook.png";
import footer_logo from "../assets/footer_logo.png";
import linkedin from "../assets/linkedin.png";
import tweeter from "../assets/tweeter.png";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-(--mirage-blue) text-white text-center flex flex-col md:flex-row">
      {/* Left section */}
      <div className="flex-1 flex flex-col md:flex-row justify-evenly items-center p-6 gap-2 md:gap-0">
        <div className="flex-1 flex justify-center md:justify-start">
          <img src={footer_logo} alt="" className="md:ml-20 h-8" />
        </div>

        <div className="flex-1">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-5 items-center">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex-1 flex justify-center items-center p-6 gap-8">
        <a href="#">
          <img src={facebook} alt="" className="h-5" />
        </a>
        <a href="#">
          <img src={tweeter} alt="" className="h-5" />
        </a>
        <a href="#">
          <img src={linkedin} alt="" className="h-5" />
        </a>
      </div>
    </footer>
  );
}
