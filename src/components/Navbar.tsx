import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheck }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Title (One line wordmark) */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg shadow-xs">
                <span className="text-cyan-400 font-black">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors whitespace-nowrap">
                  Vestrics Solutions
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                  Authorized SAP Gold Partner
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: 4 Navigation Links (single-line, concise) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#overview"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Overview
            </a>
            <a
              href="#capabilities"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Capabilities
            </a>
            <a
              href="#compatibility"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Compatibility
            </a>
            <a
              href="#partner"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Why Vestrics
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCheck}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:bg-blue-900 transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request System Compatibility Check</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-700 rounded-md"
            >
              Overview
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-700 rounded-md"
            >
              Capabilities
            </a>
            <a
              href="#compatibility"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-700 rounded-md"
            >
              Compatibility
            </a>
            <a
              href="#partner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-700 rounded-md"
            >
              Why Vestrics
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheck();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <span>Request System Compatibility Check</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
