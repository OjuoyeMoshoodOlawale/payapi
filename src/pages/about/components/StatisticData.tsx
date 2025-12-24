import about_img from "../../../assets/about.png";

export default function StatisticData() {
  return (
    <section className="my-25 max-md:mx-4">
      <img
        src={about_img}
        alt="about logo"
        className="w-full mb-20 max-md:mb-8"
      />

      <div
        className="
          flex mx-30 gap-30
          max-md:justify-center
          max-md:gap-6
          max-md:flex-wrap
        "
      >
        <div className="flex-1 text-center max-md:max-w-xs">
          <hr className="h-px" />
          <p className="text-(--light-san-juan-blue) mt-4">Team Members</p>
          <h2 className="text-(--dark-pink)">300+</h2>
          <hr />
        </div>

        <div className="flex-1 text-center max-md:max-w-xs">
          <hr />
          <p className="text-(--light-san-juan-blue) mt-4">Offices in the US</p>
          <h2 className="text-(--dark-pink)">3</h2>
          <hr />
        </div>

        <div className="flex-1 text-center max-md:max-w-xs">
          <hr />
          <p className="text-(--light-san-juan-blue) mt-4">
            Transactions analyzed
          </p>
          <h2 className="text-(--dark-pink)">10M+</h2>
          <hr />
        </div>
      </div>
    </section>
  );
}
