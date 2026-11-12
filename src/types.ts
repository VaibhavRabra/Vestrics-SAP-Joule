export type FeatureCategory =
  | 'all'
  | 'transactional'
  | 'navigation'
  | 'grounding'
  | 'agents'
  | 'security';

export type DeploymentStatus = 'Native & Out-of-the-Box' | 'Supported via SAP BTP' | 'Custom Extension Required' | 'Manual Workflow';

export interface FeatureItem {
  id: string;
  name: string;
  category: 'transactional' | 'navigation' | 'grounding' | 'agents' | 'security';
  categoryLabel: string;
  description: string;
  s4hanaStatus: DeploymentStatus;
  s4hanaNotes: string;
  businessOneStatus: DeploymentStatus;
  businessOneNotes: string;
  legacyStatus: DeploymentStatus;
  legacyNotes: string;
  businessImpact: string;
  technicalPrerequisite: string;
}

export interface ScenarioPrompt {
  id: string;
  title: string;
  department: 'finance' | 'supply-chain' | 'hr' | 'procurement';
  departmentName: string;
  badge: string;
  userPrompt: string;
  jouleResponse: string;
  highlightedMetrics: { label: string; value: string }[];
  actionTriggered: string;
  businessValue: string;
}

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  erpSystem: string;
  departmentScope: string;
  targetTimeline: string;
  comments: string;
}
