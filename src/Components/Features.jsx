import { CheckCircle, Calendar, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    icon: <Zap className="w-8 h-8 text-sky-600 dark:text-sky-500" />,
    title: "Automations",
    desc: "Automate repetitive tasks with simple rules.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-sky-600 dark:text-sky-500" />,
    title: "Smart Scheduling",
    desc: "Plan sprints and set deadlines with reminders.",
  },
  {
    icon: <Users className="w-8 h-8 text-sky-600 dark:text-sky-500" />,
    title: "Team Collaboration",
    desc: "Assign tasks, comment, and keep everyone in sync.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-sky-600 dark:text-sky-500" />,
    title: "Progress Insights",
    desc: "Visualize progress with dashboards and reports.",
  },
];

const Features = () => (
  <section
    id="features"
    className="py-16 px-6 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
  >
    <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-3xl font-bold">Features</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Everything teams need to plan, collaborate, and ship — without the mess.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((f, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="p-6 bg-gray-200 dark:bg-gray-600 rounded-xl shadow-lg hover:shadow-sm"
        >
          <div className="mb-4">{f.icon}</div>
          <h3 className="font-semibold text-lg">{f.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {f.desc}
          </p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Features;
