import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import SuccessScreen from './components/SuccessScreen';

function App() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [specificChoice, setSpecificChoice] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    // Wait for EmailJS to load and then initialize
    const initEmailJS = () => {
      if (window.emailjs) {
        window.emailjs.init('kcAk0wxoLwTEjz764');
        console.log('EmailJS initialized');
      } else {
        // Retry in 500ms if not loaded yet
        setTimeout(initEmailJS, 500);
      }
    };
    
    initEmailJS();
  }, []);

  const handleReset = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedActivity('');
    setSpecificChoice('');
  };

  return (
    <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        
        {step === 2 && (
          <Step2
            selectedDate={selectedDate}
            selectedActivity={selectedActivity}
            specificChoice={specificChoice}
            onDateChange={setSelectedDate}
            onActivityChange={setSelectedActivity}
            onChoiceChange={setSpecificChoice}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <Step3
            selectedDate={selectedDate}
            selectedActivity={selectedActivity}
            specificChoice={specificChoice}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
            isSending={isSending}
            onSendingChange={setIsSending}
          />
        )}

        {step === 4 && <SuccessScreen onReset={handleReset} />}
      </div>
    </div>
  );
}

export default App;
