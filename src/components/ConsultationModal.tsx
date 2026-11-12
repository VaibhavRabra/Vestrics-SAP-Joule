import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Building, Mail, User, Shield } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [erpSystem, setErpSystem] = useState('SAP S/4HANA Cloud (Public/Private)');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!workEmail.trim()) {
      newErrors.workEmail = 'Corporate work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      newErrors.workEmail = 'Please provide a valid email address';
    }
    if (!companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              Compatibility Check Requested
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. A Vestrics Solutions certified SAP Solution Architect will review your system environment (<span className="text-slate-800 font-medium">{erpSystem}</span>) and contact you at <strong className="text-slate-900">{workEmail}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vestrics Solutions</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Request System Compatibility Check
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Find out if your current SAP landscape is ready to deploy SAP Joule, and receive recommendations on prerequisites and next steps.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className={`w-full pl-9 pr-3 py-2 text-xs text-slate-900 bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                      errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Corporate Work Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="jane.doe@company.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs text-slate-900 bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                      errors.workEmail ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'
                    }`}
                  />
                </div>
                {errors.workEmail && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.workEmail}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Global Industries"
                    className={`w-full pl-9 pr-3 py-2 text-xs text-slate-900 bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                      errors.companyName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'
                    }`}
                  />
                </div>
                {errors.companyName && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.companyName}</p>
                )}
              </div>

              {/* Current ERP System */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current SAP ERP Environment
                </label>
                <select
                  value={erpSystem}
                  onChange={(e) => setErpSystem(e.target.value)}
                  className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  <option value="SAP S/4HANA Cloud (Public/Private)">SAP S/4HANA Cloud (Public/Private)</option>
                  <option value="SAP S/4HANA On-Premise">SAP S/4HANA On-Premise</option>
                  <option value="SAP Business One">SAP Business One (SME)</option>
                  <option value="SAP ECC 6.0">SAP ECC 6.0</option>
                  <option value="Other / Evaluating Migration to SAP">Other / Evaluating Migration to SAP</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., We want to know if our version supports natural language sales order creation..."
                  className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Your details are kept confidential under strict enterprise NDA standards.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Compatibility Check Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
