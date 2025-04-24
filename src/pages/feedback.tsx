import React from 'react';

const Feedback = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-start justify-center px-4 py-8">
      <div className="w-full max-w-md sm:max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Share Your Thoughts 💬
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-300 mb-6">
          Got feedback, ideas, or issues? We'd love to hear from you!
        </p>

        <div className="relative w-full overflow-hidden rounded-lg shadow-sm border border-gray-300 dark:border-gray-600">
          <iframe
            src="https://forms.gle/p9wb8mi57UQF3vgu7"
            title="Feedback Form"
            className="w-full h-[500px] sm:h-[600px] rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Powered by Google Forms. We don’t store your personal data.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
