import banking from "../../../assets/banking.png";
import consumer_paymet from "../../../assets/consummer_payment.png";
import personal_finace from "../../../assets/personal_finance.png";
export default function Features() {
  return (
    <section className="flex w-full p-5 items-center gap-5 px-30">
      <div className="flex-1 flex flex-col items-center text-center">
        <img src={personal_finace} className="w-20" />
        <h3 className="text-(--mirage-blue)">Personal Finances</h3>
        <p className="text-(--light-san-juan-blue) mt-3 text-center leading-loose">
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>
      <div className="text-sm flex-1 flex flex-col items-center text-center">
        <img src={banking} alt="" className="w-20" />
        <h3 className="text-(--mirage-blue)">Banking & Coverage</h3>
        <p className="text-sm text text-(--light-san-juan-blue) mt-3 text-center leading-loose">
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center text-center">
        <img src={consumer_paymet} className="w-20" />
        <h3 className="text-(--mirage-blue)">Consumer Payments</h3>
        <p className="text-sm text-(--light-san-juan-blue) mt-3 text-center leading-loose">
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
    </section>
  );
}
