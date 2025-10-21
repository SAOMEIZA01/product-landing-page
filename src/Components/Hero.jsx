import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-12 py-28"
    >
      <div className="max-w-5xl mx-auto my-10 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            FlowSync — Automate workflows. Ship faster.
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg max-w-xl opacity-90"
          >
            FlowSync helps teams centralize tasks, automate repetitive work, and
            get visibility across projects — all in one place.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <a
              href="#pricing"
              className="inline-block bg-white text-blue-600 px-5 py-3 rounded-full font-semibold shadow hover:scale-[.99]"
            >
              Get started
            </a>
            <a
              href="#features"
              className="inline-flex items-center px-4 py-3 rounded-full border border-white/30 hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* Simple visual mockup card */}
          <div className="w-full max-w-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="h-48 bg-white/20 rounded-lg p-3 flex flex-col gap-2">
              <div className="h-6 w-3/4 bg-white/30 rounded" />
              <div className="h-4 w-1/2 bg-white/20 rounded" />
              <div className="mt-auto flex gap-2">
                <div className="h-8 w-8 bg-white/30 rounded" />
                <div className="h-8 w-8 bg-white/30 rounded" />
                <div className="h-8 w-8 bg-white/30 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
