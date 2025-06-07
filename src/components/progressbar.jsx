function Progressbar({ currentStep, isMobile = false }) {
  const steps = ["Step 1", "Step 2", "Step 3", "Dashboard"];

  if (isMobile) {
    // Horizontal mobile version
    return (
      <div className="flex justify-between w-full px-4 py-3 bg-gray-600 dark:bg-gray-700 rounded-md shadow-md">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          return (
            <div key={label} className="flex flex-col items-center w-full">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center mb-1
                  ${isActive ? "bg-blue-600 text-white font-bold" : "bg-gray-300 text-gray-700"}`}
              >
                {stepNumber}
              </div>
              <span
                className={`text-xs text-center ${
                  isActive ? "text-blue-700 font-semibold" : "text-gray-800 dark:text-gray-300"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop vertical sidebar version
  return (
    <div
    className="fixed top-0 left-0 h-screen w-40 bg-gray-800 shadow-md dark:bg-gray-800"
    style={{ zIndex: 1000 }} // optional to stay on top
  >
    <h2 className="text-2xl font-bold mb-6 text-white p-4">Progress</h2>
    <ul className="space-y-6 px-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        return (
          <li
            key={label}
            className={`text-lg cursor-default ${
              isActive
                ? "text-blue-400 font-extrabold"
                : "text-gray-300 hover:text-white transition-colors"
            }`}
          >
            {label}
          </li>
        );
      })}
    </ul>
  </div>
  );
}

export default Progressbar;
