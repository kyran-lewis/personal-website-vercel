import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., Formspree, Netlify forms, or custom API)
    console.log("Sent Email:", formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    console.log(e.target.value, e.target.name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8 shadow-sm">
      {/* Header sub-block */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
          <span>✉️</span> Send Me A Message
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name input */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-bold text-gray-700 uppercase tracking-wider"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Email address input */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-bold text-gray-700 uppercase tracking-wider"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Subject input */}
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Opportunity: Full Stack Developer position"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Message textarea input */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timing, and details..."
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition resize-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Submit Action Block */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer active:scale-[0.98]"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmailForm;
