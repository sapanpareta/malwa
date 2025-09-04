export default function QuotationForm() {
  return (
    <div className="p-6 bg-slate-300 dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
        Request a Quote
      </h2>

      <form className="space-y-4" name="contact" netlify>
        {/* Name */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Phone</label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* From */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">From</label>
          <input
            type="text"
            placeholder="City / Location"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* To */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">To</label>
          <input
            type="text"
            placeholder="City / Location"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Request Quote
          </button>
        </div>
      </form>
    </div>
  );
}
