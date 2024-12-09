import React from "react";

const AboutUs = () => {
  console.log("AboutUs component is rendering");
  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-5xl font-bold text-green-900 text-center mb-12">About Us Page</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
        Welcome to the Digital Kisan Market. Our mission is to empower farmers and buyers through an
        innovative digital platform, fostering transparency and growth for all. Meet the team behind
        this vision:
      </p>
      <div className="bg-white shadow-lg rounded-xl p-10 mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center border-b pb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Nilesh Fate", role: "Project Leader", avatar: "NF" },
            { name: "Manasi Shirale", role: "Team Member", avatar: "MS" },
            { name: "Pooja Shivankar", role: "Team Member", avatar: "PS" },
            { name: "Nayan Gajare", role: "Team Member", avatar: "NG" },
            { name: "Madhusudhan Kendre", role: "Team Member", avatar: "MK" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-50 shadow-sm rounded-lg p-6 hover:shadow-md transition duration-300"
            >
              <div className="w-24 h-24 bg-green-200 text-green-800 flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
                {member.avatar}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
