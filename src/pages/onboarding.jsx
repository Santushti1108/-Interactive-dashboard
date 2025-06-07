import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';

function Onboarding({ step, setStep, formData, setFormData }) {
  const navigate = useNavigate();
  const [canProceed, setCanProceed] = useState(false); 

  return (
    <div className="p-6 max-w-xl mx-auto">
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="btn">
            Back
          </button>
        )}
        {step < 3 && (
          <button
            onClick={() => setStep(step + 1)}
            className={`btn ${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!canProceed}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            onClick={() => {
              setStep(4);
              navigate('/dashboard');
            }}
            className={`btn ${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!canProceed}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Onboarding;
