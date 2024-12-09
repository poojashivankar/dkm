import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      country: "",
      subject: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Contact Form
        </h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold">
            Thank you for contacting us! We'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your name..."
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:bg-forestGreen focus:border-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name..."
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:bg-forestGreen focus:border-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-lg font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:bg-forestGreen focus:border-green-500"
                required
              >
                <option value="">Select your country</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write your message..."
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:bg-forestGreen focus:border-green-500"
                style={{ height: "150px" }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-oliveGreen text-white py-3 px-6 rounded-lg shadow-md hover:bg-forestGreen focus:ring-2 focus:ring-offset-2 focus:bg-forestGreen font-semibold"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl desc-cnt">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">Contact Details</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Email:</strong>{" "}
            <a href="mailto:cdac.mumbai.ac.in" className="text-green-600 hover:text-green-800 underline">
              cdac.mumbai.ac.in
            </a>
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Phone:</strong> +91-12345-67890
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Address:</strong> C-DAC, Mumbai, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default ContactForm;