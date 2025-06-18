import React from 'react';
import { useWizard } from './WizardContext';

export default function StepNavigation() {
  const { step, setStep } = useWizard();

  return (
    <div style={{ marginTop: 24 }}>
      {step > 1 && (
        <button onClick={() => setStep(step - 1)} style={{ marginRight: 8 }}>
          Back
        </button>
      )}
      {step < 6 && (
        <button onClick={() => setStep(step + 1)}>
          Next
        </button>
      )}
    </div>
  );
}