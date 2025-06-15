import React, { useState } from 'react';
import { gsap } from 'gsap';

type Step = {
title: string;
options?: string[];
input?: boolean;
};

const questions: Step[] = [
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
const [stage, setStage] = useState<'intro' | 'form' | 'summary'>('intro');
const [stepIndex, setStepIndex] = useState(0);
const [answers, setAnswers] = useState<Record<string, string | number>>({});

const handleStart = () => {
setStage('form');
gsap.fromTo('.step', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
};

const handleNext = (value: string | number) => {
const question = questions[stepIndex].title;
setAnswers((prev) => ({ ...prev, [question]: value }));

```
if (stepIndex < questions.length - 1) {
  gsap.to('.step', {
    y: -50,
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      setStepIndex((prev) => prev + 1);
      gsap.fromTo('.step', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
    }
  });
} else {
  gsap.to('.step', {
    y: -50,
    opacity: 0,
    duration: 0.3,
    onComplete: () => setStage('summary')
  });
}

```

};

return (
<div style={{
fontFamily: 'Inter, sans-serif',
maxWidth: '620px',
margin: '0 auto',
padding: '4rem 1.5rem',
color: '#222'
}}>
{stage === 'intro' && (
<div className="step" style={{ textAlign: 'center' }}>
<img src="/logo.png" alt="Rackform" style={{ width: 110, marginBottom: '2rem' }} />
<h1 style={{
fontSize: '2.25rem',
marginBottom: '1rem',
fontWeight: 600
}}>
Design your warehouse in minutes.
</h1>
<p style={{ fontSize: '1rem', color: '#666', marginBottom: '2.5rem' }}>
Answer a few questions to generate a layout plan and summary.
</p>
<button
onClick={handleStart}
style={{
background: '#000',
color: '#fff',
padding: '0.85rem 1.75rem',
border: 'none',
borderRadius: '6px',
fontSize: '1rem',
fontWeight: 500,
cursor: 'pointer',
transition: 'all 0.2s ease'
}}
>
Get Started →
</button>
</div>
)}

```
  {stage === 'form' && (
    <div className="step" key={stepIndex}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>{questions[stepIndex].title}</h2>

      {questions[stepIndex].input ? (
        <input
          type="number"
          placeholder="e.g. 500"
          onBlur={(e) => handleNext(Number(e.target.value))}
          style={{
            width: '100%',
            fontSize: '1rem',
            padding: '0.75rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {questions[stepIndex].options!.map((opt) => (
            <button
              key={opt}
              onClick={() => handleNext(opt)}
              style={{
                padding: '0.75rem 1.25rem',
                background: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#eee')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#f9f9f9')}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )}

  {stage === 'summary' && (
    <div className="step">
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Summary</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {Object.entries(answers).map(([q, a]) => (
          <li key={q} style={{ marginBottom: '1rem' }}>
            <strong>{q}</strong><br />
            <span style={{ color: '#444' }}>{a}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Restart
      </button>
    </div>
  )}
</div>

```

);
}
