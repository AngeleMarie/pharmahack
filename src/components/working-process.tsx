import Image from "next/image";

const WorkingProcess = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-12 relative">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
          How It Works
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">Working Process</h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side (Laptop Image) */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/dell.png"
            alt="Computer"
            width={500}
            height={500}
            className="w-2/3 sm:w-3/4 md:w-2/3 lg:w-full drop-shadow-2xl hidden md:block"
          />
        </div>

        {/* Right Side (Steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Step 01 */}
          <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg">01</h3>
            <h4 className="font-semibold mt-2">Connect and Collaborate</h4>
            <p className="text-sm mt-2">
              Link pharmacies with insurers for seamless claim processing and communication.
            </p>
          </div>

          {/* Step 02 */}
          <div className="relative p-6  text-white rounded-2xl overflow-hidden">
            <h3 className="font-bold text-lg">02</h3>
            <h4 className="font-semibold mt-2">Create your free account</h4>
            <p className="text-sm mt-2">
              Register as a pharmacy or insurance provider to get started instantly.
            </p>
            <Image
              src="/pills.png"
              alt="Pills"
              width={300}
              height={300}
              className="absolute -top-8 right-0 opacity-60 pointer-events-none hidden sm:block"
            />
          </div>

          {/* Step 03 */}
          <div className="bg-white  md:bg-blue-600 text-blue-600 md:text-white p-6 rounded-2xl ">
            <h3 className="font-bold text-lg">03</h3>
            <h4 className="font-semibold mt-2">Manage your workflow</h4>
            <p className="text-sm mt-2">
              Track, review, and update claims efficiently in one platform.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-blue-600  md:bg-white text-white md:text-blue-600 p-6 rounded-2xl md:shadow-lg ">
            <h3 className="font-bold text-lg">04</h3>
            <h4 className="font-semibold mt-2">Receive insights</h4>
            <p className="text-sm mt-2">
              Get analytics and reports to improve your pharmacy and insurance collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
