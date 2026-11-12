import React from 'react';
import { Award, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

interface WhyVestricsProps {
  onOpenCheck: () => void;
}

export const WhyVestrics: React.FC<WhyVestricsProps> = ({ onOpenCheck }) => {
  const steps = [
    {
      step: '1',
      title: 'Compatibility Evaluation',
      description: 'We review your SAP landscape, database version, and clean core readiness.',
    },
    {
      step: '2',
      title: 'Secure Foundation Setup',
      description: 'We configure SAP BTP, identity authentication, and role-based data security.',
    },
    {
      step: '3',
      title: 'Activation & Team Adoption',
      description: 'We enable Joule personas, test department workflows, and train your staff.',
    },
  ];

  return (
    <section id="partner" className="py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-700 mb-2">
            Implementation Partner
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Work with Vestrics Solutions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            As an authorized SAP Gold Partner, Vestrics Solutions bridges advanced SAP Cloud AI capabilities with practical enterprise implementation.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-800 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Authorized SAP Gold Partner
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Recognized partner status ensuring your AI deployment adheres directly to SAP best practices, certified architectural guidelines, and clean core standards.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Enterprise Data Security
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              We ensure Joule strictly inherits your existing SAP user roles (PFCG/IAS). Your company data is never used to train public models.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-cyan-100/80 text-cyan-800 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Full-Stack SAP BTP Integration
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Specialized technical capability to extend AI features to both SAP S/4HANA Cloud and SAP Business One via SAP Business Technology Platform.
            </p>
          </div>
        </div>

        {/* 3-Step Simple Path */}
        <div className="mt-12 p-8 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-4">
            Our 3-Step Deployment Path
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {s.step}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-normal">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Start with a no-obligation technical compatibility check for your current SAP landscape.
            </div>
            <button
              onClick={onOpenCheck}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Request System Compatibility Check</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
