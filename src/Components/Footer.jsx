import React from "react";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-700 dark:bg-slate-900 text-gray-300 py-10 px-6" id="footer">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        {/* Brand & Discription */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">FlowSync</h3>
          <p className="text-sm text-gray-400">Automate your repetitive work. Simplify your tasks. Stay visible.</p>
        </div>
        {/* Contact Info */}
        <div>
          <p className="text-sm">Contact: support@flowsync.app</p>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-blue-500 transition"></a>
          <Facebook />
          <a href="#" className="hover:text-sky-400 transition"></a>
          <Twitter />
          <a href="#" className="hover:text-pink-500 transition"></a>
          <Instagram />
          <a href="Mailto:support@taskflow.app" className="hover:text-green-400 transition"></a>
          <Mail />
        </div>
      </motion.div>
      <p className="text-center font-sm text-gray-400 dark:text-gray-500 mt-8">© {new Date().getFullYear()}. FlowSync. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;