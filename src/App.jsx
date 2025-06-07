import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WelcomePage from './pages/welcompage';
import Onboarding from './pages/onboarding';
import Dashboard from './pages/dashboard';
import Progressbar from './components/progressbar';

function AppLayout() {
  const location = useLocation();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    company: "",
    industry: "",
    size: "",
    theme: localStorage.getItem("theme") || "light",
    layout: localStorage.getItem("layout") || "grid",
  }));

  useEffect(() => {
    localStorage.setItem("theme", formData.theme);
    localStorage.setItem("layout", formData.layout);

    if (formData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [formData.theme, formData.layout]);

  // Hide progress bar on welcome and dashboard pages
  const noProgressPages = ["/", "/dashboard"];
  const showProgressBar = !noProgressPages.includes(location.pathname);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all">
      {showProgressBar && (
        <>
          {/* Sidebar on desktop */}
          <div className="hidden md:flex flex-col w-40 bg-gray-100 dark:bg-gray-900 p-4">
            <Progressbar currentStep={step} />
          </div>

          {/* Mobile horizontal progressbar */}
          <div className="flex md:hidden w-full bg-gray-100 dark:bg-gray-900 p-2">
            <Progressbar currentStep={step} isMobile />
          </div>
        </>
      )}
      <main className="flex-grow p-4 md:p-6 max-w-full md:max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<WelcomePage setStep={setStep} />} />
          <Route
            path="/onboarding"
            element={
              <Onboarding
                step={step}
                setStep={setStep}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
