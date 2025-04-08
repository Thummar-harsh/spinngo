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
      "Leave a sweet note for each other to find",
      "Recreate your first date at home",
      "Draw each other without looking at the paper",
      "Give each other pet names for the rest of the day",
      "Have a 2-minute stare-off—first one to blink loses (but wins a kiss!)",
      "Take a selfie together and give it a silly caption",
      "Say something you’ve never told your partner before",
      "Describe your partner using only emojis",
      "Play 20 questions to learn something new about each other",
      "Do a dramatic reading of a love letter (real or made up!)",
      "Hold a ‘yes day’—say yes to every romantic request for 10 minutes",
      "Make a time capsule of your relationship so far",
      "Give your partner a cute nickname they haven’t heard yet",
      "Create a mini scrapbook page using things around you",
      "Tell your partner what your favorite feature of theirs is—physically and emotionally",
      "Wrap your partner in a blanket burrito and tell them why they’re your favorite comfort",
      "Share your favorite photo together and say why it means so much",
      "Plan your dream vacation together, no budget",
      "Tell the story of how you'd write your love story as a movie plot",
      "Send a voice note saying something romantic right now"
    ],
    Fun: [

      "Make a funny face for 5 seconds",
      "Try to talk while holding your tongue (careful 😅)",
      "Try to touch your nose with your tongue",
      "Say the alphabet backward (or at least try!)",
      "Pretend to be a robot for 10 seconds",
      "Do a silly dance for 10 seconds",
      "Speak in a funny accent for 30 seconds",
      "Try to balance a spoon on your nose",
      "Make up a silly song about your day",
      "Act like a chicken for 15 seconds",
      "Say something serious with a completely silly face",
      "Mimic your favorite cartoon character",
      "Do your best runway walk… in slow motion"

    ],
    Casual: [
      "Smile for 10 seconds without stopping",
      "Share the last thing you Googled",
      "Name three things you can see around you",
      "Say the first word that comes to your mind",
      "Tap your head and rub your belly at the same time",
      "Do 5 jumping jacks right now",
      "Try to say a tongue twister three times fast",
      "Hold your breath for as long as you can (safely!)",
      "Try to stand on one foot for 15 seconds",
      "Make a weird noise and own it",
      "Count backwards from 20 out loud",
      "Tell a fun fact about yourself",
      "Give your best fake cry for 5 seconds",
      "Say your favorite food like it's a dramatic movie line",
      "Invent a handshake with the person next to you",
      "Make a noise only a dolphin would understand",
      "Talk like a pirate for 15 seconds",
      "Do your best slow-motion run across the room",
      "Say something sweet in the weirdest voice you can",
      "Freeze in place like a statue for 10 seconds"
    ],
    Normal: [
"Name 3 fruits that are red",
  "Think of 5 animals that live in the water",
  "Say 3 words that rhyme with 'cat'",
  "Name the months of the year in order",
  "Spell your name out loud, backward",
  "List 3 things you can write with",
  "Count to 20 in twos (2, 4, 6...)",
  "Name 4 things you can wear on your head",
  "Say the days of the week in reverse",
  "Name 3 things that are cold",
  "Say the alphabet without singing it",
  "Name 5 vegetables",
  "Name a country for each letter in your first name",
  "List 3 animals that start with the letter B",
  "Say a food that starts with each letter of 'EAT'",
  "Name something that flies but isn’t a bird",
  "List 3 words that mean 'happy'",
  "Say a sentence using only 5 words",
  "Name something that floats and something that sinks",
  "Say one fun fact you know"
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