import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        We'd love to hear from you!
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Whether you have feedback, questions, suggestions, or just want to say hi — feel free to reach out.
      </p>

      <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        <p>📬 Email us at:</p>
        <p className="font-semibold underline">spinngo.in@gmail.com</p>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        <p>💡 Got ideas for new features or tasks?</p>
        <p>Let us know! We're always looking to improve and make the app more fun and useful.</p>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        <p>🛠️ Found a bug or issue?</p>
        <p>Please tell us what happened, and we’ll fix it as soon as we can.</p>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Thanks for using Task Spinner — we truly appreciate your support!
      </p>

      <div className="mt-8">
        <a href="/" className="mt-4">

          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;