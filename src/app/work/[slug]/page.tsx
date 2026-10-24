"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15 requires awaiting params
  const { slug } = React.use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to all work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${project.color}`}>
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              Case Study
            </span>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-16 border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Project Overview</h3>
              <div className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-1">Role</p>
                  <p>{project.role}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-1">Timeline</p>
                  <p>{project.timeline}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white mb-1">Tools</p>
                  <p>{project.tools}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                  <br /><br />
                  The primary goal was to solve the complex interaction patterns while maintaining a clean, minimalist aesthetic that didn't overwhelm the user.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  By implementing a modular design system and conducting multiple rounds of user testing, I was able to reduce the friction in the primary user flow by 40%.
                </p>
              </section>

              <section className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
                <ul className="space-y-4">
                  {project.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
