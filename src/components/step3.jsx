import { useEffect } from 'react';
import { Moon, Sun, List, Grid } from 'lucide-react';

function Step3({ formData, setFormData, setCanProceed }) {
  useEffect(() => {
    const isValid =
      formData.theme.trim() !== '' && formData.layout.trim() !== '';
    setCanProceed(isValid);
  }, [formData.theme, formData.layout]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Preferences</h2>

      {/* Theme Selector */}
      <div>
        <label className="block mb-1">Theme</label>
        <select
          value={formData.theme}
          onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
          className="w-full p-4 rounded-xl bg-gray-700 text-white"
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </div>

      {/* Layout Selector */}
      <div>
        <label className="block mb-1">Dashboard Layout</label>
        <select
          value={formData.layout}
          onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
          className="w-full p-4 rounded-xl bg-gray-700 text-white"
        >
          <option value="grid">🔲 Grid View</option>
          <option value="list">📋 List View</option>
        </select>
      </div>
    </div>
  );
}

export default Step3;
