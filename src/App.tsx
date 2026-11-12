/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreCapabilities } from './components/CoreCapabilities';
import { SystemCompatibility } from './components/SystemCompatibility';
import { WhyVestrics } from './components/WhyVestrics';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);

  const handleOpenCheck = () => {
    setIsCheckModalOpen(true);
  };

  const handleCloseCheck = () => {
    setIsCheckModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <Navbar onOpenCheck={handleOpenCheck} />

      <main className="flex-1">
        {/* Simple, High-Trust Hero */}
        <div id="overview">
          <Hero onOpenCheck={handleOpenCheck} />
        </div>

        {/* 3 Core Capabilities of SAP Joule (Assist, Automate, Analyze) */}
        <CoreCapabilities />

        {/* System Compatibility for S/4HANA, Business One & Legacy ERP */}
        <SystemCompatibility onOpenCheck={handleOpenCheck} />

        {/* Why Vestrics Solutions & Simple 3-Step Deployment */}
        <WhyVestrics onOpenCheck={handleOpenCheck} />
      </main>

      {/* Clean Footer */}
      <Footer onOpenCheck={handleOpenCheck} />

      {/* Request System Compatibility Check Modal */}
      <ConsultationModal
        isOpen={isCheckModalOpen}
        onClose={handleCloseCheck}
      />
    </div>
  );
}
