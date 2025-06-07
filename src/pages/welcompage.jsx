import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
      <p className="mb-8 max-w-md text-center">
        "Hi there! To get the best experience, please provide a few details about yourself.
      </p>
      <button
        onClick={() => navigate('/onboarding')}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg font-semibold transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default WelcomePage;
