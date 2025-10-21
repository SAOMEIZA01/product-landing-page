const CTA = () => (
  <section
    id="contact"
    className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-center"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Ready to simplify your workflow?</h2>
      <p className="mt-3 mb-6">
        Start a free trial and see how FlowSync can streamline your team.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#pricing"
          className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold"
        >
          Start free
        </a>
        <a
          href="#features"
          className="px-6 py-3 rounded-full border border-white/30"
        >
          Book demo
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
