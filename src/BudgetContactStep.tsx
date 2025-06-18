import React from 'react';
import { useWizard } from './WizardContext';

export default function BudgetContactStep() {
  const { budgetContact, updateBudgetContact } = useWizard();

  return (
    <div>
      <h2>Budget & Contact</h2>
      <label>
        Budget (£):
        <input
          type="number"
          value={budgetContact.budget || ''}
          onChange={e => updateBudgetContact({ budget: Number(e.target.value) })}
          placeholder="e.g. 10000"
        />
      </label>
      <br />
      <label>
        Desired Timeline:
        <input
          type="text"
          value={budgetContact.timeline || ''}
          onChange={e => updateBudgetContact({ timeline: e.target.value })}
          placeholder="e.g. 3 months"
        />
      </label>
      <br />
      <label>
        Contact Name:
        <input
          type="text"
          value={budgetContact.contactName || ''}
          onChange={e => updateBudgetContact({ contactName: e.target.value })}
          placeholder="Full name"
        />
      </label>
      <br />
      <label>
        Company:
        <input
          type="text"
          value={budgetContact.company || ''}
          onChange={e => updateBudgetContact({ company: e.target.value })}
          placeholder="Company name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={budgetContact.email || ''}
          onChange={e => updateBudgetContact({ email: e.target.value })}
          placeholder="Email address"
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={budgetContact.phone || ''}
          onChange={e => updateBudgetContact({ phone: e.target.value })}
          placeholder="Phone number"
        />
      </label>
      <br />
      <label>
        Additional Notes:
        <textarea
          value={budgetContact.notes || ''}
          onChange={e => updateBudgetContact({ notes: e.target.value })}
          rows={3}
          cols={30}
          placeholder="Any additional information"
        />
      </label>
    </div>
  );
}