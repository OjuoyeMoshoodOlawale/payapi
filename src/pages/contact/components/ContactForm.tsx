export default function ContactForm() {
  return (
    <form className="ml-15 ">
      <div>
        <input
          type="text"
          name="name"
          placeholder="John Appleseed"
          className="border-b-2 w-full my-5 focus:outline-none text-2xl h-10 "
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="border-b-2 w-full my-5 focus:outline-none text-2xl h-10"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          name="company-name"
          className="border-b-2 w-full my-5 text-2xl h-10 focus:outline-none "
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="border-b-2 w-full my-5  focus:outline-none text-2xl h-10"
        />
      </div>
      <div>
        <textarea
          name=""
          className="border-b-2 w-full my-5 focus:outline-none text-2xl"
          placeholder="Message"
        ></textarea>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="accept_id"
            className="mt-2 h-7 w-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="accept_id"
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Stay up-to-date with company announcements and updates to our API
          </label>
          <br />
        </div>
      </div>
      <button className=" mt-4 px-4 py-2 rounded-full bg(--link-water-white) text-(--mirage-blue) text-sm hover:bg-(--san-juan-blue) hover:text-white border-2 cursor-pointer">
        Submit
      </button>
    </form>
  );
}
