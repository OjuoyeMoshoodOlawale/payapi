import google from "../../../assets/google.png";
import hp from "../../../assets/hp.png";
import microsoft from "../../../assets/microsoft.png";
import nvidia from "../../../assets/nvidia.png";
import oracle from "../../../assets/oracle.png";
import tesla from "../../../assets/tesla.png";

export default function OurClients() {
  return (
    <section className="w-full bg-(--mirage-blue) txt-white flex justify-center items-center gap-20 p-10 pl-50 pr-50 py-30">
      <div className="flex-1">
        <h2 className="text-white">Who we work with</h2>
        <p className="text-white">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
      </div>
      <div className="flex-1 w-full grid grid-cols-3 gap-10">
        {[tesla, microsoft, hp, oracle, google, nvidia].map((img, i) => (
          <div
            key={i}
            className="relative aspect-square w-full flex items-center justify-center overflow-hidden h-15"
          >
            <img src={img} alt={img} className=" " />
          </div>
        ))}
      </div>
    </section>
  );
}
