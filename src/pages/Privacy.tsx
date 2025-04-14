import React from 'react';

const Privacy = () => {
  return (
    // <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto p-8 rounded-lg shadow-lg">
    <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto my-6 px-4 py-6 md:px-8 md:py-8 rounded-xl shadow-lg">

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        At <strong>Spin N Go</strong>, your privacy matters to us.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        We do not collect any personal information when you use our app. Spin N Go is designed to be simple, fun, and safe — without tracking you or asking for unnecessary details.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Here’s what you need to know:</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
        <li className="mb-2">No accounts needed: You don’t need to sign up or log in to use the app.</li>
        <li className="mb-2">No personal data collected: We don’t collect your name, email, location, or any other personal info.</li>
        <li className="mb-2">No cookies or trackers: We don’t use cookies to monitor your activity.</li>
        <li className="mb-2">Third-party services: If we ever use third-party tools (like feedback forms or analytics), we’ll make sure your data stays protected and private.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Feedback and Contact:</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        If you choose to send us feedback, we may receive the information you provide voluntarily — like your email or message — but we only use it to improve the app or respond to you.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Updates to this Policy:</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        We may update this page from time to time. If we make changes, we’ll update the date at the bottom of the page.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Last updated: <strong>April 5, 2025</strong>
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

export default Privacy;