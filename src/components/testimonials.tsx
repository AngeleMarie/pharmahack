import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sam",
    date: "Verified 12/12/2021",
    title: "Useful Products",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus sed ornare nunc placerat diam.",
    rating: 5,
    image: "/sam.png", // place in /public
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "Verified 01/10/2021",
    title: "Excellent Service",
    text: "Gravida molestie turpis et tortor dolor cursus odio enim.",
    rating: 5,
    image: "/jane.png",
  },
  {
    id: 3,
    name: "John Doe",
    date: "Verified 02/15/2022",
    title: "Very good service",
    text: "Turpis non adipiscing laoreet facilisis. Gravida molestie turpis et tortor dolor cursus odio enim.",
    rating: 5,
    image: "/john.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto">
      {/* --- Testimonials --- */}
      <div className="py-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-wide text-gray-500 text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold">
            Our  <span className="text-[#4880FF]">Happy </span>Customers
          </h2>
          <p className="text-gray-500 mt-3 max-w-4xl mx-auto">
            Discover how Pharma Hack is transforming pharmacy and insurance
            workflows through real stories from the professionals who use it
            every day.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 justify-center flex-wrap">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>

              {/* Name + Date */}
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.date}</p>

              {/* Rating */}
              <div className="flex justify-center my-2 text-yellow-400">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>

              {/* Title */}
              <p className="text-blue-600 font-semibold">{t.title}</p>

              {/* Text */}
              <p className="text-gray-500 text-sm mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Newsletter --- */}
      <div className="bg-[#4880FF] text-white h-96 my-8 rounded-3xl mx-auto relative bg-[url('/pattern.svg')]  bg-center bg-repeat">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between py-24 items-center gap-10">
          {/* Left text */}
          <div>
            <p className="text-4xl leading-snug w-1/2">
              Build <b>Qualified </b>
                <b>Services</b> {" "}
              With PharmaHack
            </p>
          </div>

          {/* Right form */}
          <div>
            <p className="mb-4 text-white/80">
              Subscribe Now To Get Updates, Insights, And Smart Solutions — Right
              In Your Inbox.
            </p>
            <form className="flex flex-row gap-x-5  ">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-gray-800 rounded-full w-2/3  focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 rounded-full hover:bg-gray-800 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
