

import { Users, Briefcase, Bell, List, Grid } from 'lucide-react';

function Dashboard({ formData, setFormData }) {
  const cards = [
    {
      title: 'Team Members',
      count: 0,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Active Projects',
      count: 0,
      icon: <Briefcase className="w-6 h-6 text-green-800" />,
      bg: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Notifications',
      count: 0,
      icon: <Bell className="w-6 h-6 text-yellow-800" />,
      bg: 'bg-yellow-100 dark:bg-yellow-900',
    },
  ];

  const toggleLayout = () => {
    setFormData((prev) => ({
      ...prev,
      layout: prev.layout === 'grid' ? 'list' : 'grid',
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Welcome, {formData.name || 'User'}!</h1>
        <button
          onClick={toggleLayout}
          className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full"
        >
          {formData.layout === 'grid' ? <List size={20} /> : <Grid size={20} />}
          <span className="text-sm">
            {formData.layout === 'grid' ? 'List View' : 'Grid View'}
          </span>
        </button>
      </div>

      <div className="space-y-1 text-lg mb-6">
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Company:</strong> {formData.companyName}</p>
        <p><strong>Industry:</strong> {formData.industry}</p>
        <p><strong>Company Size:</strong> {formData.size}</p>
      </div>

      <div className={formData.layout === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'}>
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-2xl shadow-md p-6 flex items-center justify-between ${card.bg}`}>
            <div>
              <h4 className="text-sm font-semibold dark:text-white">{card.title}</h4>
              <p className="text-2xl font-bold text-black dark:text-white">{card.count}</p>
            </div>
            <div className="p-2 rounded-full bg-white dark:bg-black shadow-inner">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

