import { useEffect } from 'react';

function Step2({ formData, setFormData, setCanProceed }) {
  useEffect(() => {
    const isValid =
      (formData.companyName || '').trim() !== '' &&
      (formData.industry || '').trim() !== '' &&
      (formData.size || '').toString().trim() !== '';
    setCanProceed(isValid);
  }, [formData.companyName, formData.industry, formData.size]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        Step 2: Business Information
      </h2>

      <div>
        <label className="block text-sm text-black dark:text-white">Company Name</label>
        <input
          type="text"
          value={formData.companyName || ''}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          className="w-full p-4 rounded-xl bg-gray-700 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-black dark:text-white">Industry</label>
        <input
          type="text"
          value={formData.industry || ''}
          onChange={(e) =>
            setFormData({ ...formData, industry: e.target.value })
          }
          className="w-full p-4 rounded-xl bg-gray-700 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-black dark:text-white">Company Size</label>
        <input
          type="number"
          value={formData.size || ''}
          onChange={(e) =>
            setFormData({ ...formData, size: e.target.value })
          }
          className="w-full p-4 rounded-xl bg-gray-700 text-white"
        />
      </div>
    </div>
  );
}

export default Step2;
