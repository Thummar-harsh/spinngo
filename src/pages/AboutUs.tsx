import { FaUsers, FaRegLightbulb, FaHandsHelping, FaGamepad } from 'react-icons/fa';

const About = () => {
  return (
    // <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto p-8 rounded-lg shadow-lg">
    <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto my-6 px-4 py-6 md:px-8 md:py-8 rounded-xl shadow-lg">

      {/* <div className="bg-white dark:bg-gray-800 max-w-5xl mx-auto my-12 px-6 py-10 md:px-12 md:py-14 rounded-2xl shadow-lg"> */}

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Welcome to <strong>Task Spinner</strong> – a fun and interactive game designed for two players or small groups!
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Whether you're hanging out with friends, working on tasks together, or just looking for a fun way to challenge each other, Task Spinner adds a twist of randomness and excitement.
        Just pick a mode, tap Spin, and let the app decide your next move or task!
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Why we built this:</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        We believe doing tasks (even the boring ones) can be more enjoyable when shared. With a little bit of competition, cooperation, and surprise, Task Spinner turns everyday tasks into a game.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Perfect for:</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
        <li className="flex items-center mb-2">
          <FaUsers className="text-blue-500 mr-2" /> Friends who want to challenge each other
        </li>
        <li className="flex items-center mb-2">
          <FaRegLightbulb className="text-yellow-500 mr-2" /> Study buddies
        </li>
        <li className="flex items-center mb-2">
          <FaHandsHelping className="text-green-500 mr-2" /> Roommates sharing chores
        </li>
        <li className="flex items-center mb-2">
          <FaGamepad className="text-purple-500 mr-2" /> Teams doing fun productivity rounds
        </li>
      </ul>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        We’re all about simple fun with a purpose. Got suggestions or want to say hi? Don’t be shy—reach out!
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Let the spinning begin!</h2>
      <a href="/" className="mt-4">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </a>
    </div>
  );
};

export default About;