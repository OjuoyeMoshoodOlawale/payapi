import PricingItem from "./PricingItem";

export default function Pricing() {
  return (
    <section
      className="
        mx-25
        max-md:mx-4
      "
    >
      <h1 className="max-md:text-center">Pricing</h1>

      <div
        className="
          flex mt-20 gap-10
          max-md:flex-col
          max-md:items-center
          max-md:mt-10
          max-md:gap-6
        "
      >
        <PricingItem
          plan="Free Plan"
          desciption="Build and test using our core set of products with up to 100 API requests "
          price="0.00"
        />
        <PricingItem
          plan="Basic Plan"
          desciption="Launch your project with unlimited requests and no contractual minimums  "
          price="249.00"
        />
        <PricingItem
          plan="Premium Plan"
          desciption="Get tailored solutions, volume pricing, and dedicated support for your team "
          price="499.00"
        />
      </div>
    </section>
  );
}
