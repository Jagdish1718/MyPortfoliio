"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20 px-6">
      <div className="max-w-4xl mx-auto pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Hello, I'm Jagdish.</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
                alt="Jagdish Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I am a dedicated .NET Full Stack Developer with a strong foundation in building scalable enterprise applications.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Specializing in the Microsoft tech stack, I bridge the gap between complex business requirements and high-performance technical solutions, with a focus on CRM and ERP systems.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="mailto:jagdishaudichya123@gmail.com" className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-blue-600">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <section>
            <h2 className="text-2xl font-bold mb-6">Engineering Principles</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="font-bold text-zinc-900 dark:text-white">Clean Architecture</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Focusing on separation of concerns and maintainability to ensure codebases can grow without becoming legacy.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-zinc-900 dark:text-white">Performance First</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Optimizing database queries and API response times to ensure a seamless user experience at scale.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-zinc-900 dark:text-white">Test-Driven Development</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Implementing comprehensive unit and integration tests to guarantee reliability and reduce production bugs.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {[
                { year: '2022 - Present', role: 'Full Stack .NET Developer', company: 'CRM/ERP Project' },
                { year: 'Previous Experience', role: '.NET Developer', company: 'Enterprise Solutions' },
              ].map((exp, i) => (
                <div key={i} className="flex justify-between items-start border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2" />
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">{exp.year}</span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
