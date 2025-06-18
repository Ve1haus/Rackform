import React from 'react';
import { WizardProvider, useWizard } from './WizardContext';
import WarehouseInfoStep from './WarehouseInfoStep';
import RackingRequirementsStep from './RackingRequirementsStep';
import OperationalNeedsStep from './OperationalNeedsStep';
import PreferencesComplianceStep from './PreferencesComplianceStep';
import BudgetContactStep from './BudgetContactStep';
import StepNavigation from './StepNavigation';

function StepRenderer() {
  const { step } = useWizard();

  switch (step) {
    case 1:
      return <WarehouseInfoStep />;
    case 2:
      return <RackingRequirementsStep />;
    case 3:
      return <OperationalNeedsStep />;
    case 4:
      return <PreferencesComplianceStep />;
    case 5:
      return <BudgetContactStep />;
    default:
      return <div>Thank you for your submission!</div>;
  }
}

export default function App() {
  return (
    <WizardProvider>
      <div style={{ maxWidth: 600, margin: 'auto', padding: 16 }}>
        <h1>Rackform Intake Wizard</h1>
        <StepRenderer />
        <StepNavigation />
      </div>
    </WizardProvider>
  );
}