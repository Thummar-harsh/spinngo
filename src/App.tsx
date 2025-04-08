import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Edit2, Plus, X, Save, Wand2, RefreshCw, Sun, Moon, MessageSquare, Info } from 'lucide-react';
import { tasks as initialTasks } from './tasks';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('Normal');
  const [currentTask, setCurrentTask] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTasks, setEditingTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const taskIdeas = {
    Romantic: [
      'Plan a surprise weekend getaway',
      'Create a romantic scavenger hunt',
      'Take a couples dance class',
      'Make homemade chocolates together',
      'Write and perform a love song',
      'Create a couple\'s bucket list',
      'Plan a rooftop dinner date',
      'Take a sunset sailing trip',
      'Design a couples spa day',
      'Create a memory time capsule',
      'Plan a stargazing night',
      'Make a relationship vision board',
      'Write love notes for each other',
      'Create a couple\'s playlist',
      'Plan a surprise breakfast in bed'
    ],
    Fun: [
      'Start a friendly competition',
      'Create a mini obstacle course',
      'Have a themed costume party',
      'Learn magic tricks together',
      'Start a two-person book club',
      'Create a fun photo challenge',
      'Plan a game night tournament',
      'Make a short funny video',
      'Have a dance-off competition',
      'Create a mini escape room',
      'Start a fun DIY project',
      'Learn a new party trick',
      'Plan a treasure hunt',
      'Create funny challenges',
      'Start a fun tradition'
    ],
    Casual: [
      'Try a new local restaurant',
      'Start a puzzle together',
      'Visit a local museum',
      'Have a picnic in the backyard',
      'Go for a bike ride',
      'Browse a flea market',
      'Play tourist in your own city',
      'Start a small garden project',
      'Try a new coffee shop',
      'Take a scenic drive',
      'Visit a local park',
      'Browse a bookstore together',
      'Try a new recipe',
      'Take photos around town',
      'Plan a lazy day together'
    ],
    Normal: [
      'Create a weekly meal plan',
      'Organize digital photos',
      'Update the family calendar',
      'Clean out the refrigerator',
      'Sort through old emails',
      'Update emergency contacts',
      'Create a household budget',
      'Make a home repair list',
      'Organize the pantry',
      'Update insurance documents',
      'Clean out the car',
      'Review monthly expenses',
      'Update contact lists',
      'Organize digital files',
      'Plan weekly chores'
    ]
  };

  const handleSpin = () => {
    setIsSpinning(true);
    const categoryTasks = tasks[selectedCategory];
    
    let spinCount = 0;
    const maxSpins = 20;
    const spinInterval = setInterval(() => {
      const randomTask = categoryTasks[Math.floor(Math.random() * categoryTasks.length)];
      setCurrentTask(randomTask);
      spinCount++;
      
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        setIsSpinning(false);
      }
    }, 100);
  };

  const startEditing = () => {
    setIsEditing(true);
    setEditingTasks([...tasks[selectedCategory]]);
  };

  const saveChanges = () => {
    setTasks(prev => ({
      ...prev,
      [selectedCategory]: editingTasks
    }));
    setIsEditing(false);
  };

  const addNewTask = () => {
    if (newTask.trim()) {
      setEditingTasks(prev => [...prev, newTask.trim()]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    setEditingTasks(prev => prev.filter((_, i) => i !== index));
  };

  const updateTask = (index: number, value: string) => {
    setEditingTasks(prev => prev.map((task, i) => i === index ? value : task));
  };

  const generateTask = () => {
    const categoryIdeas = taskIdeas[selectedCategory as keyof typeof taskIdeas];
    const randomIdea = categoryIdeas[Math.floor(Math.random() * categoryIdeas.length)];
    setNewTask(randomIdea);
  };

  const generateAllNewTasks = () => {
    const categoryIdeas = taskIdeas[selectedCategory as keyof typeof taskIdeas];
    const shuffled = [...categoryIdeas].sort(() => Math.random() - 0.5);
    const newTasks = shuffled.slice(0, 8);
    setEditingTasks(newTasks);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sparkles className="text-purple-500 h-8 w-8" />
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">Task Spinner</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://forms.gle/your-google-form-url"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <MessageSquare size={20} />
                <span>Feedback</span>
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow max-w-md mx-auto pt-12 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 appearance-none pr-10 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isSpinning || isEditing}
              >
                {Object.keys(tasks).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" size={20} />
            </div>
            <button
              onClick={startEditing}
              disabled={isSpinning || isEditing}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors duration-200"
            >
              <Edit2 size={20} />
            </button>
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning || isEditing}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSpinning ? 'Spinning...' : 'Spin!'}
          </button>

          <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-6 min-h-[100px] flex items-center justify-center text-center transition-opacity duration-200 ${isSpinning ? 'animate-pulse' : ''}`}>
            {currentTask ? (
              <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">{currentTask}</p>
            ) : (
              <p className="text-gray-400 dark:text-gray-500">Click spin to get your task!</p>
            )}
          </div>

          {isEditing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Edit {selectedCategory} Tasks</h2>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <button
                      onClick={generateAllNewTasks}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      <RefreshCw size={18} />
                      Generate All New Tasks
                    </button>
                  </div>

                  {editingTasks.map((task, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={task}
                        onChange={(e) => updateTask(index, e.target.value)}
                        className="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                      <button
                        onClick={() => removeTask(index)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Add new task..."
                      className="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                      onKeyPress={(e) => e.key === 'Enter' && addNewTask()}
                    />
                    <button
                      onClick={generateTask}
                      className="p-2 text-purple-500 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                      title="Generate random task"
                    >
                      <Wand2 size={20} />
                    </button>
                    <button
                      onClick={addNewTask}
                      className="p-2 text-purple-500 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={saveChanges}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Save size={20} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200">
                About Us
              </a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200">
                Contact Us
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/disclaimer" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Task Spinner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;