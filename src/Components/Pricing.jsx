import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    perks: ["Up to 3 projects", "Basic automation", "Community support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12/mo",
    perks: ["Unlimited projects", "Advanced automations", "Priority support"],
    highlight: true,
  },
  {
    name: "Team",
    price: "$49/mo",
    perks: ["Team seats", "SAML + SSO", "Dedicated onboarding"],
    highlight: false,
  },
];

const Pricing = () => (
  <section
    id="pricing"
    className="py-16 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
  >
    <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-3xl font-bold">Pricing</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Simple, predictable pricing for teams of any size.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
      {plans.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className={`p-6 rounded-2xl shadow-lg ${
            p.highlight
              ? "bg-sky-600 text-white scale-[1.02]"
              : "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          }`}
        >
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-3xl font-bold my-4">{p.price}</p>
          <ul className="space-y-2 mb-6">
            {p.perks.map((perk, idx) => (
              <li key={idx} className="text-sm">
                • {perk}
              </li>
            ))}
          </ul>
          <button
            className={`${
              p.highlight ? "bg-white dark:bg-slate-300 text-blue-600 dark:text-sky-600" : "bg-sky-600 text-white"
            } w-full py-2 rounded-full`}
          >
            Choose
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Pricing;
