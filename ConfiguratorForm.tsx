import React, { useState } from 'react';
import { gsap } from 'gsap';

const steps = [
{
title: 'Do you already have racking installed?',
options: ['Yes', 'No']
},
{
title: 'Do you know the brand of your racking?',
options: ['Link 51', 'Mecalux', 'Stow', 'AR', 'Other', 'Not Sure']
},
{
title: 'How many pallet locations do you need?',
input: true
},
{
title: 'Do you need any accessories?',
options: ['Mesh Decks', 'Timber Decks', 'Upright Protectors', 'End Barriers', 'Beam Labels', 'None']
}
];

export default function ConfiguratorForm() {
const [stepIndex, setStepIndex] = useState(0);
const [answers, setAnswers] = useState<Record<string, string | number>>({});

const currentStep = steps[stepIndex];

const handleNext = (value: string | number) => {
const question = currentStep.title;
setAnswers({ ...answers, [question]: value });
if (stepIndex < steps.length - 1) {
[gsap.to](http://gsap.to/)('.step', {
y: -50,
opacity: 0,
duration: 0.3,
onComplete: () => {
setStepIndex(stepIndex + 1);
gsap.fromTo(
'.step',
{ y: 50, opacity: 0 },
{ y: 0, opacity: 1, duration: 0.3 }
);
}
});
} else {
console.log('All answers:', answers);
}
};

return (
<div style={{ maxWidth: '600px', margin: '4rem auto', fontFamily: 'sans-serif' }}>
<div className="step" key={stepIndex}>
<h2>{currentStep.title}</h2>
{currentStep.input ? (
<input
type="number"
placeholder="e.g. 500"
onBlur={(e) => handleNext(Number(e.target.value))}
style={{ fontSize: '1rem', padding: '0.5rem', width: '100%' }}
/>
) : (
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
{currentStep.options!.map((opt) => (
<button
key={opt}
onClick={() => handleNext(opt)}
style={{
padding: '0.75rem 1.25rem',
border: '1px solid #ccc',
borderRadius: '8px',
background: '#f5f5f5',
cursor: 'pointer'
}}
>
{opt}
</button>
))}
</div>
)}
</div>
</div>
);
}
