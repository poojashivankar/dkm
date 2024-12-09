import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex items-center justify-between space-x-8">

        {/* Left Side: Image with Overlayed Text */}
        <div className="relative flex-1">
          <img
            src="https://agrioxwp.pixydrops.com/wp-content/uploads/2021/10/story-v1-img.jpg"  // Your image URL
            alt="Agriculture"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-4xl font-bold">#Agriculture Matters</h2>
          </div>
        </div>

        {/* Right Side: Counters and Text */}
        <div className="flex-1 text-center p-6">
          <h2 className="text-4xl font-bold text-forestGreen mb-4">Small Agriculture Story</h2>
          <p className="mb-8 text-lg text-gray-700">
            We are committed to providing our customers with exceptional service while offering our employees the best training.
          </p>

          {/* Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Statistic */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-forestGreen">
                <CountUp end={869} duration={2.5} />
              </h2>
              <p className="mt-2 text-gray-700">Projects Completed</p>
            </div>

            {/* Second Statistic */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-forestGreen">
                <CountUp end={683} duration={2.5} />
              </h2>
              <p className="mt-2 text-gray-700">Satisfied Customers</p>
            </div>

            {/* Third Statistic */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-forestGreen">
                <CountUp end={795} duration={2.5} />
              </h2>
              <p className="mt-2 text-gray-700">Organic Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;


