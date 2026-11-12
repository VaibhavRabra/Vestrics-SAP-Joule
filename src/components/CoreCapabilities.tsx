import React from 'react';
import { MessageSquareText, Zap, LineChart } from 'lucide-react';

export const CoreCapabilities: React.FC = () => {
  const pillars = [
    {
      icon: MessageSquareText,
      title: 'Assist & Navigate',
      summary: 'Conversational business guidance directly in your interface.',
      points: [
        'Ask questions in natural language and receive grounded answers from your SAP system',
        'Navigate directly to target SAP Fiori apps without searching through menus or remembering T-codes',
        'Search across business entities, orders, inventory, and customer accounts in one step',
      ],
    },
    {
      icon: Zap,
      title: 'Automate & Accelerate',
      summary: 'Eliminate repetitive data entry and routine administration.',
      points: [
        'Draft sales order items, invoices, and journal adjustments in seconds',
        'Generate job descriptions and candidate match summaries within SAP SuccessFactors',
        'Trigger multi-step workflow approvals and notifications across departments',
      ],
    },
    {
      icon: LineChart,
      title: 'Analyze & Recommend',
      summary: 'Turn operational and financial data into clear decisions.',
      points: [
        'Summarize financial variance drivers and explain margin shifts in plain English',
        'Identify supply chain delivery risks and evaluate alternate inventory options',
        'Detect billing discrepancies and verify contract clause compliance',
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-700 mb-2">
            What Joule Does
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            How SAP Joule Helps Your Teams Work Faster
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Designed specifically for enterprise operations, Joule acts as an intelligent coworker across finance, supply chain, procurement, and HR.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {pillar.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
