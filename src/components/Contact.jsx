import { MapPin, Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-8 lg:px-16 transition-colors">
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 pb-3">
          We'd love to hear from you
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl">
          Whether you have a question about our local sourcing, need help with
          an order, or just want to share a recipe, our team is ready to
          assist.
        </p>
      </div>

      {/* Content grid: form card on the left, map on the right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Get in Touch card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h2>

          {/* Contact details */}
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  Fresh HQ
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-snug">
                  Sainik Nagar, Uttam Nagar
                  <br />
                  New Delhi, Delhi-110059
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  Email Us
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">hello@grocify.app</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  Call Us
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">1-800-555-FRESH</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 px-4 py-2 text-sm text-gray-700 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 px-4 py-2 text-sm text-gray-700 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="How can we help you today?"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 px-4 py-2 text-sm text-gray-700 dark:text-gray-100 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold rounded-lg py-3 hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm h-full min-h-[400px] lg:min-h-[600px]">
          <iframe
            title="Grocify HQ Location"
            className="w-full h-full min-h-[400px] lg:min-h-[600px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Sainik+Nagar,+Uttam+Nagar,+New+Delhi,+Delhi-110059&output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;