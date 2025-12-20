import google from "../../../assets/google.png";
import hp from "../../../assets/hp.png";
import microsoft from "../../../assets/microsoft.png";
import nvidia from "../../../assets/nvidia.png";
import oracle from "../../../assets/oracle.png";
import tesla from "../../../assets/tesla.png";
export default function Innovators() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h3 className="text-2xl mt-20 mx-3 mb-10">
        Join the thousands of innovators that are already building with us
      </h3>
      <div className="flex-1 w-full grid grid-cols-3 gap-10">
        {[tesla, microsoft, hp, oracle, google, nvidia].map((img, i) => (
          <div
            key={i}
            className="invert relative aspect-square w-full flex items-center justify-center overflow-hidden h-15"
          >
            <img src={img} alt={img} className=" " />
          </div>
        ))}
      </div>
    </div>
  );
}
