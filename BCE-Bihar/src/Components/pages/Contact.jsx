
const Contact = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-12 sm:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Contact Us
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-slate-900 tracking-tight">
            We'd Love to Hear From You
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-7">
            Have questions, suggestions, or found incorrect information?
            Reach out to us and we'll get back to you as soon as possible.
          </p>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10">


          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">

            {/* Form Header */}
            <div className="mb-8">

              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl mb-4">
                💬
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Send a Message
              </h2>

              <p className="text-slate-500 mt-2">
                Fill out the form and our team will get back to you.
              </p>

            </div>


            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-slate-50 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-slate-50 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-slate-50 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-slate-50 outline-none resize-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                ></textarea>
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>



          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-5">


            {/* Email */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition">
                  📧
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-1">
                    Email Us
                  </p>

                  <h3 className="text-lg font-bold text-slate-900">
                    support@beureview.com
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    We'll respond as soon as possible.
                  </p>
                </div>

              </div>

            </div>


            {/* Location */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-1">
                    Our Location
                  </p>

                  <h3 className="text-lg font-bold text-slate-900">
                    Patna, Bihar
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    India
                  </p>
                </div>

              </div>

            </div>


            {/* Support Hours */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition">
                  ⏰
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-1">
                    Support Hours
                  </p>

                  <h3 className="text-lg font-bold text-slate-900">
                    Monday - Saturday
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>


            {/* ================= FAQ ================= */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                  ?
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Frequently Asked Questions
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Quick answers to common questions
                  </p>
                </div>

              </div>


              <div className="space-y-5">


                {/* FAQ 1 */}
                <div className="border-b border-slate-700 pb-4">

                  <h4 className="font-semibold">
                    Can anyone write a review?
                  </h4>

                  <p className="text-slate-400 text-sm mt-2 leading-6">
                    Yes, verified BEU students can submit reviews.
                  </p>

                </div>


                {/* FAQ 2 */}
                <div className="border-b border-slate-700 pb-4">

                  <h4 className="font-semibold">
                    Is the platform free?
                  </h4>

                  <p className="text-slate-400 text-sm mt-2 leading-6">
                    Yes, using BEU Review is completely free.
                  </p>

                </div>


                {/* FAQ 3 */}
                <div>

                  <h4 className="font-semibold">
                    How can I report fake reviews?
                  </h4>

                  <p className="text-slate-400 text-sm mt-2 leading-6">
                    Use the Report option on the review or contact our
                    support team.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 bg-blue-600 rounded-3xl p-8 sm:p-10 text-center text-white">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Have something to tell us?
          </h2>

          <p className="text-blue-100 mt-3 max-w-xl mx-auto">
            Your feedback helps us make BEU Review better for students
            across Bihar.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold">
            💙 We value your feedback
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

