import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCheck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheck }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-16 pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Unboxed Metadata Kicker (Clean, understated typography) */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700 mb-4">
            <span>Vestrics Solutions</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Authorized SAP Gold Partner</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Enterprise Generative AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
            SAP Joule:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
              Business AI
            </span>{' '}
            Built for Your Enterprise
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg text-slate-600 leading-relaxed text-balance">
            SAP Joule is the generative AI copilot truly embedded into your daily SAP workflows.
            Vestrics Solutions helps midmarket and enterprise organizations determine compatibility,
            connect data, and activate Joule securely.
          </p>

          {/* Single Focused CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCheck}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:bg-blue-900 transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
            >
              <span>Request System Compatibility Check</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#compatibility"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-blue-700 transition-all whitespace-nowrap"
            >
              View System Requirements
            </a>
          </div>

          {/* Three Foundational Guarantees (From SAP AI Guidelines) */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <Sparkles className="w-4 h-4 text-blue-700" />
                <span>Relevant</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-normal">
                Grounded in your business context, company data, and actual ERP master records.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reliable</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-normal">
                Draws on SAP domain expertise with transparent source citations and zero external leakage.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>Responsible</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-normal">
                Protects user authorizations (PFCG roles), enterprise privacy boundaries, and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
