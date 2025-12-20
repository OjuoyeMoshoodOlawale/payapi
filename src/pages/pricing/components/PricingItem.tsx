import mark from "../../../assets/mark.png";
export default function PricingItem(props: any) {
  const { plan, desciption, price } = props;
  return (
    <div className="flex-1 ">
      <h3 className="text-(--dark-pink)">{plan}</h3>
      <p className="my-5">{desciption}</p>
      <p className="text-4xl text font-bold mb-5">${price}</p>
      <hr />
      <ul className="my-5 list-disc list-inside text-(--light-san-juan-blue) space-y-4">
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Transactions
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Auth
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Identity
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Investments
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Assets
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Liabilities
        </li>
        <li className="flex gap-3 items-start">
          <img src={mark} />
          Income
        </li>
      </ul>
      <hr />
      <button className=" mt-4 px-4 py-2 rounded-full bg(--link-water-white) text-(--mirage-blue) text-sm hover:bg-(--light-san-juan-blue) border-2 cursor-pointer">
        Schedule a Demo
      </button>
    </div>
  );
}
