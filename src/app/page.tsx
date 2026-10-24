"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Layout, Smartphone, PenTool } from 'lucide-react';
import projects from '@/data/projects.json';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Building <span className="text-blue-600">scalable systems</span> with precision.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-lg">
            I'm a .NET Developer specializing in building robust, high-performance backend systems and scalable web applications that solve complex business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="border border-zinc-200 dark:border-zinc-800 px-8 py-4 rounded-full font-medium text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative z-10 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14faceb62fb1?auto=format&fit=crop&q=80&w=1000"
              alt="Software Engineering Workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 -z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20 -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              A collection of projects where I solved complex problems through research-driven design.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <Link key={project.id} href={`/work/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.category}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    { icon: <Layout size={24} />, title: "Backend Architecture", desc: "Designing scalable microservices and monolithic systems using ASP.NET Core and C#." },
    { icon: <Smartphone size={24} />, title: "API Development", desc: "Building secure, high-performance RESTful APIs with JWT authentication and OpenAPI/Swagger." },
    { icon: <PenTool size={24} />, title: "Database Optimization", desc: "Expertise in SQL Server, Entity Framework Core, and performance tuning for large datasets." },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Expertise</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Blending analytical thinking with creative execution to build products that people love to use.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
      <Expertise />
    </>
  );
}
