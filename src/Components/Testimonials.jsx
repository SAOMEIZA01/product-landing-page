import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aisha B",
    role: "PM",
    quote: "FlowSync reduced our task overhead by 40%.",
  },
  {
    name: "David K",
    role: "Engineer",
    quote: "Automations are easy to set up and saved us hours weekly.",
  },
  {
    name: "Fatima S",
    role: "Designer",
    quote: "The interface is clean and our team collaboration improved.",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-16 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
  >
    <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-3xl font-bold">What our users say</h2>
    </div>

    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
      {reviews.map((r, i) => (
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="p-6 bg-gray-200 dark:bg-slate-800 rounded-xl shadow-lg"
        >
          <p className="italic">“{r.quote}”</p>
          <footer className="mt-4 font-semibold">
            {r.name}{" "}
            <span className="text-sm font-normal text-slate-500">
              — {r.role}
            </span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
