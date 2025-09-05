export default function QuotationForm() {
  return (
    <div className="p-6 bg-secondary rounded-xl shadow-lg border border-border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
        Request a Quote
      </h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        {/* Hidden input required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* From */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">From</label>
          <input
            type="text"
            name="from"
            placeholder="City / Location"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>

        {/* To */}
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">To</label>
          <input
            type="text"
            name="to"
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
