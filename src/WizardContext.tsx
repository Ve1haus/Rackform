import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WarehouseInfo {
  totalArea?: number;
  clearHeight?: number;
  floorLoadCapacity?: number;
  accessPoints?: string;
}

interface RackingRequirements {
  palletCapacity?: number;
  palletDimensions?: string;
  maxPalletWeight?: number;
  goodsType?: string;
}

interface OperationalNeeds {
  palletMovementFrequency?: string;
  equipmentUsed?: string;
  aisleWidth?: number;
}

interface PreferencesCompliance {
  preferredBrands?: string[];
  newOrUsed?: 'new' | 'used';
  modularity?: boolean;
  safetyFeatures?: string[];
  complianceStandards?: string[];
}

interface BudgetContact {
  budget?: number;
  timeline?: string;
  contactName?: string;
  company?: string;
  email?: string;
  phone?: string;
  notes?: string;
}

interface WizardState {
  step: number;
  warehouseInfo: WarehouseInfo;
  rackingRequirements: RackingRequirements;
  operationalNeeds: OperationalNeeds;
  preferencesCompliance: PreferencesCompliance;
  budgetContact: BudgetContact;
  setStep: (step: number) => void;
  updateWarehouseInfo: (info: Partial<WarehouseInfo>) => void;
  updateRackingRequirements: (info: Partial<RackingRequirements>) => void;
  updateOperationalNeeds: (info: Partial<OperationalNeeds>) => void;
  updatePreferencesCompliance: (info: Partial<PreferencesCompliance>) => void;
  updateBudgetContact: (info: Partial<BudgetContact>) => void;
}

const WizardContext = createContext<WizardState | undefined>(undefined);

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
};

export const WizardProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [warehouseInfo, setWarehouseInfo] = useState<WarehouseInfo>({});
  const [rackingRequirements, setRackingRequirements] = useState<RackingRequirements>({});
  const [operationalNeeds, setOperationalNeeds] = useState<OperationalNeeds>({});
  const [preferencesCompliance, setPreferencesCompliance] = useState<PreferencesCompliance>({});
  const [budgetContact, setBudgetContact] = useState<BudgetContact>({});

  const updateWarehouseInfo = (info: Partial<WarehouseInfo>) => setWarehouseInfo(prev => ({ ...prev, ...info }));
  const updateRackingRequirements = (info: Partial<RackingRequirements>) => setRackingRequirements(prev => ({ ...prev, ...info }));
  const updateOperationalNeeds = (info: Partial<OperationalNeeds>) => setOperationalNeeds(prev => ({ ...prev, ...info }));
  const updatePreferencesCompliance = (info: Partial<PreferencesCompliance>) => setPreferencesCompliance(prev => ({ ...prev, ...info }));
  const updateBudgetContact = (info: Partial<BudgetContact>) => setBudgetContact(prev => ({ ...prev, ...info }));

  return (
    <WizardContext.Provider value={{
      step,
      warehouseInfo,
      rackingRequirements,
      operationalNeeds,
      preferencesCompliance,
      budgetContact,
      setStep,
      updateWarehouseInfo,
      updateRackingRequirements,
      updateOperationalNeeds,
      updatePreferencesCompliance,
      updateBudgetContact,
    }}>
      {children}
    </WizardContext.Provider>
  );
};