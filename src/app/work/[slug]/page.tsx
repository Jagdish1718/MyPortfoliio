import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import CaseStudyContent from '@/components/CaseStudyContent';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
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

        <CaseStudyContent project={project} />
      </div>
    </div>
  );
}
