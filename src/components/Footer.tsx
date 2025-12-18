import facebook from "../assets/facebook.png";
import footer_logo from "../assets/footer_logo.png";
import linkedin from "../assets/linkedin.png";
import tweeter from "../assets/tweeter.png";
export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-(--mirage-blue) text-white  text-center  flex">
      <div className="flex-1 flex  justify-evenly items-center p-4">
        <div className="flex-1 flex">
          <img src={footer_logo} alt="" className="ml-20" />
        </div>
        <div className="flex-1">
          <ul className="flex gap-5">
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
