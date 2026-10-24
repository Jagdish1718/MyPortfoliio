"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import projects from '@/data/projects.json';

export default function WorkPage() {
  return (
    <div className="min-h-screen pb-20 px-6">
      <div className="max-w-7xl mx-auto pt-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Selected Projects</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A deep dive into the projects I've worked on, focusing on the intersection of user needs and business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/work/${project.slug}`}>
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
