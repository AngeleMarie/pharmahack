// components/WorkingProcess.tsx

import Image from "next/image";


const WorkingProcess = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 relative">

      {/* Title */}
      <div className="text-center mb-12">
        <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
          How It Works
        </span>
        <h2 className="text-3xl font-bold mt-4">Working Process</h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Side (Laptop) */}
        <div className="flex justify-between">
          <Image
            src="/dell.png"
            alt="Computer"
            width={500}
            height={500}
            className="w-2/3 drop-shadow-2xl hidden md:block"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 relative ">
          {/* Step 01 */}
          <div className="bg-white  text-blue-600 p-6 rounded-2xl shadow-lg z-10">
            <h3 className="font-bold text-lg">01</h3>
            <h4 className="font-semibold mt-2">Connect and Collaborate</h4>
            <p className="text-sm mt-2">
              Link pharmacies with insurers for seamless claim processing and
              communication.
            </p>
          </div>

          {/* Step 02 */}
          <div className=" p-6 relative  ">
          
            <h3 className="font-bold text-lg">02</h3>
            <h4 className="font-semibold mt-2">Create your free account</h4>
            <p className="text-sm mt-2">
              Register as a pharmacy or insurance provider to get started instantly.
            </p>
                    <Image
            src="/pills.png"
            alt="Pills"
              width={900}
            height={900}  
            className="absolute -top-12 right-0 opacity-90 "
          />
          </div>

          {/* Step 03 */}
          <div className="p-6 ">
            <h3 className="font-bold text-lg">03</h3>
            <h4 className="font-semibold mt-2">Create your free account</h4>
            <p className="text-sm mt-2">
              Register as a pharmacy or insurance provider to get started instantly.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg">04</h3>
            <h4 className="font-semibold mt-2">Connect and Collaborate</h4>
            <p className="text-sm mt-2">
              Link pharmacies with insurers for seamless claim processing and
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
