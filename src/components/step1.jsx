import { useEffect } from 'react';

function Step1({ formData, setFormData, setCanProceed }) {
  useEffect(() => {
    const isValid = formData.name.trim() !== '' && formData.email.trim() !== '';
    setCanProceed(isValid);
  }, [formData.name, formData.email]);

  return (
    <div className="flex flex-col text-center py-4 gap-4">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        Step 1: Personal Info
      </h2>

      <div className="flex flex-col">
        <label className="text-black dark:text-white">Name</label>
        <input
          type="text"
          className="p-4 rounded-xl bg-gray-700 text-white"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-black dark:text-white">Email</label>
        <input
          type="email"
          className="p-4 rounded-xl bg-gray-700 text-white"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
}

export default Step1;
