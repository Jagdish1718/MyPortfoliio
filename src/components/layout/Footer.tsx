import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold tracking-tighter">
            DESIGNER<span className="text-blue-600">.</span>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:hello@example.com"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
