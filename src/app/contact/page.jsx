export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow py-16 px-6 mt-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded px-4 py-2 h-32"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
