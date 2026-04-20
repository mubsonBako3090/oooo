"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import style from "./Landing.module.css"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          ProcurePro
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 border rounded hover:bg-gray-800">
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Smart Procurement <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Made Simple
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-xl"
        >
          Streamline requisitions, approvals, budgeting, and procurement workflows
          with a modern, secure platform built for organizations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/login"
            className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Get Started
          </Link>

          <a
            href="#features"
            className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Role-Based Access",
              desc: "Different dashboards for Staff, HOD, Procurement, Finance & Admin.",
            },
            {
              title: "Approval Workflow",
              desc: "Seamless approval & rejection system with full audit tracking.",
            },
            {
              title: "Budget Control",
              desc: "Prevent overspending with real-time budget validation.",
            },
            {
              title: "LPO Generation",
              desc: "Automatically generate Local Purchase Orders.",
            },
            {
              title: "Secure Auth",
              desc: "JWT authentication with protected routes.",
            },
            {
              title: "Analytics Ready",
              desc: "Track spending, approvals, and system performance.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">About the System</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          This procurement system is designed to help organizations digitize and
          automate their purchasing processes. From requisition creation to final
          approval and LPO generation, everything is handled efficiently in one place.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>

        <Link
          href="/login"
          className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
        >
          Start Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        © {new Date().getFullYear()} ProcurePro. All rights reserved.
      </footer>
    </div>
  );
                 }
