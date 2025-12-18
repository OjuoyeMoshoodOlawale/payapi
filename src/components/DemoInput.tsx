export default function DemoInput() {
  return (
    <div>
      <div className="relative w-md mt-5">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full h-10 bg-white rounded-full pl-5 pr-36 shadow-sm focus:outline-none"
        />

        <button className="absolute right-1 top-1 h-8 px-4 rounded-full bg-(--dark-pink) text-white text-sm hover:bg-pink-600 cursor-pointer">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}
