import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenCheck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheck }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
                <span className="text-cyan-300 font-black">V</span>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Vestrics Solutions
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Authorized SAP Gold Partner delivering Cloud ERP solutions, GROW with SAP, RISE with SAP, and SAP Joule integration for enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              SAP Joule
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Key Capabilities
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-white transition-colors">
                  System Compatibility
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-white transition-colors">
                  Why Vestrics Solutions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCheck}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Request Compatibility Check
                </button>
              </li>
            </ul>
          </div>

          {/* Cloud ERP Practices */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              SAP Practices
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>SAP S/4HANA Cloud (Public &amp; Private)</li>
              <li>SAP Business One (SME Solutions)</li>
              <li>GROW with SAP &amp; RISE with SAP</li>
              <li>SAP Business Technology Platform (BTP)</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Offices &amp; Contact
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>HQ:</strong> Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Offices in Chennai, Bangalore, Mumbai &amp; Dubai</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>info@vestrics.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 space-y-3">
          <div className="text-[11px] text-slate-400 leading-relaxed">
            <strong>Legal Notice &amp; Trademarks:</strong> SAP, SAP S/4HANA, SAP Business One, Joule, SAP Fiori, SAP SuccessFactors, SAP BTP, and other SAP products and services mentioned herein as well as their respective logos are trademarks or registered trademarks of SAP SE in Germany and other countries. Vestrics Solutions is an independent authorized SAP Gold Partner.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 pt-1">
            <div>
              &copy; {new Date().getFullYear()} Vestrics Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Authorized SAP Gold Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
