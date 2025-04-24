import React from 'react';

const Feedback = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
          We'd Love Your Feedback 💬
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Got a thought? An idea? A bug to squash? Let us know — it helps us make Spin & Go better for everyone!
        </p>

        <iframe
          src="https://forms.gle/p9wb8mi57UQF3vgu7"
          title="Feedback Form"
          width="100%"
          height="600"
          className="rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p className="text-xs text-center text-gray-400 mt-4">
          Google Forms is used for secure collection. Your feedback stays private.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
