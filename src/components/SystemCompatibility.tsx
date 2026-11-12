import React from 'react';
import { Check, ArrowRight, Sparkles, Server, Cloud, Cpu } from 'lucide-react';

interface SystemCompatibilityProps {
  onOpenCheck: () => void;
}

export const SystemCompatibility: React.FC<SystemCompatibilityProps> = ({ onOpenCheck }) => {
  const platforms = [
    {
      title: 'SAP S/4HANA Cloud',
      subtitle: 'Public & Private Editions',
      badge: 'Native Out-of-the-Box',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: Cloud,
      description:
        'Joule is natively integrated directly into the SAP Fiori launchpad. Users interact with Joule via the top navigation bar across standard applications.',
      features: [
        'Built-in conversational search & Fiori navigation',
        'Direct S/4HANA sales, procurement, and finance workflows',
        'Automated document grounding using SAP Help and company files',
        'Ready for standard activation with SAP BTP foundation',
      ],
      vestricsRole: 'Vestrics configures tenant roles (PFCG/IAS), user personas, and clean core governance.',
    },
    {
      title: 'SAP Business One',
      subtitle: 'Small & Midmarket Businesses',
      badge: 'Enabled via SAP BTP',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: Server,
      description:
        'While not embedded natively out of the box, Vestrics Solutions bridges SAP Joule capabilities to SAP Business One using SAP BTP & Service Layer APIs.',
      features: [
        'Natural language business queries via web client',
        'Automated order inquiry and inventory lookup connectors',
        'Secure communication through SAP Business One Service Layer',
        'Custom workflow triggers built on SAP BTP Process Automation',
      ],
      vestricsRole: 'Vestrics builds and maintains the secure BTP integration wrapper tailored to your B1 system.',
    },
    {
      title: 'SAP ECC 6.0 & Legacy',
      subtitle: 'On-Premise Legacy Core',
      badge: 'Cloud Modernization Path',
      badgeColor: 'text-slate-700 bg-slate-100 border-slate-300',
      icon: Cpu,
      description:
        'Legacy on-premise systems cannot run Joule natively. Organizations migrate to S/4HANA Cloud to unlock generative AI capabilities.',
      features: [
        'Requires migration to SAP S/4HANA Cloud (GROW or RISE with SAP)',
        'Pre-migration clean core and data hygiene preparation',
        'Assessment of customized Z-programs and legacy table structures',
        'Phased cloud transformation roadmap',
      ],
      vestricsRole: 'Vestrics delivers full end-to-end cloud migration advisory to get your landscape Joule-ready.',
    },
  ];

  const quickComparison = [
    {
      capability: 'Conversational Fiori Navigation',
      s4hana: 'Native in Fiori',
      b1: 'Web Client integration via BTP',
      ecc: 'Not available (Legacy GUI)',
    },
    {
      capability: 'Transactional Actions (Orders, Invoices)',
      s4hana: 'Out-of-the-box in standard apps',
      b1: 'Via Service Layer APIs',
      ecc: 'Manual GUI entry',
    },
    {
      capability: 'Business Document Grounding',
      s4hana: 'Native SAP Document Grounding',
      b1: 'Configured via SAP AI Core',
      ecc: 'Manual document lookups',
    },
    {
      capability: 'Role-Based Data Privacy (PFCG/IAS)',
      s4hana: 'Inherited automatically',
      b1: 'Mapped via B1 authorizations',
      ecc: 'Not applicable',
    },
    {
      capability: 'Custom Agent Creation (Joule Studio)',
      s4hana: 'Supported via SAP Build',
      b1: 'Supported via BTP extensions',
      ecc: 'Custom code required',
    },
  ];

  return (
    <section id="compatibility" className="py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-700 mb-2">
              System Compatibility
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Is Your SAP Environment Ready for Joule?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Joule deployment depends on your current ERP version and cloud infrastructure. Here is how SAP platforms align with Joule.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenCheck}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request System Compatibility Check</span>
            </button>
          </div>
        </div>

        {/* 3 Platform Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {p.subtitle}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    <ul className="space-y-2">
                      {p.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                  <strong className="text-slate-800 block text-[11px] uppercase mb-0.5">Vestrics Role</strong>
                  {p.vestricsRole}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Quick Comparison Table */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-slate-100/70 border-b border-slate-200">
            <h3 className="text-sm font-bold text-slate-900">
              Quick Feature Comparison by Platform
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-6">Capability</th>
                  <th className="py-3 px-4 text-blue-900 bg-blue-50/50">SAP S/4HANA Cloud</th>
                  <th className="py-3 px-4">SAP Business One</th>
                  <th className="py-3 px-4 text-slate-400">SAP ECC 6.0</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {quickComparison.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50">
                    <td className="py-3 px-6 font-semibold text-slate-900">
                      {row.capability}
                    </td>
                    <td className="py-3 px-4 font-medium text-blue-900 bg-blue-50/30">
                      {row.s4hana}
                    </td>
                    <td className="py-3 px-4">
                      {row.b1}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {row.ecc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clean Consultation Callout */}
        <div className="mt-8 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold tracking-tight text-white">
              Unsure of your SAP system compatibility?
            </h4>
            <p className="mt-1 text-xs text-slate-400 leading-normal">
              Our certified SAP Solution Architects will review your exact release version and recommend the most cost-effective path to deploy SAP Joule.
            </p>
          </div>
          <button
            onClick={onOpenCheck}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Request System Compatibility Check</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
