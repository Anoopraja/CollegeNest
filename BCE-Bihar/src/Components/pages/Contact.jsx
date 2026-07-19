const Contact = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold mt-6 text-slate-900">
            We'd Love to Hear From You
          </h1>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Have questions, suggestions, or found incorrect information?
            Reach out to us and we'll get back to you as soon as possible.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-white rounded-2xl shadow-sm border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="space-y-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                📧 Email
              </h3>

              <p className="text-slate-600 mt-2">
                support@beureview.com
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                📍 Location
              </h3>

              <p className="text-slate-600 mt-2">
                Patna, Bihar, India
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                ⏰ Support Hours
              </h3>

              <p className="text-slate-600 mt-2">
                Monday - Saturday
              </p>

              <p className="text-slate-600">
                9:00 AM - 6:00 PM
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">

                <div>
                  <h4 className="font-semibold">
                    Can anyone write a review?
                  </h4>

                  <p className="text-slate-600 text-sm mt-1">
                    Yes, verified BEU students can submit reviews.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Is the platform free?
                  </h4>

                  <p className="text-slate-600 text-sm mt-1">
                    Yes, using BEU Review is completely free.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    How can I report fake reviews?
                  </h4>

                  <p className="text-slate-600 text-sm mt-1">
                    Use the Report option on the review or contact our support team.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;