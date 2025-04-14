import { useState } from 'react';
import { Edit2, X, Save, RefreshCw, Plus, ChevronDown, Wand2 } from 'lucide-react';
import { tasks as initialTasks } from './tasks';
// import { tasks as initialTasks } from './tasks';

const Home = () => {

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

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('Romantic'); // Default to 'Romantic'
  const [currentTask, setCurrentTask] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTasks, setEditingTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  
  const handleSpin = () => {
    // 🔊 Play spin sound
    const spinSound = new Audio('/sounds/spin.mp3');
    spinSound.play();
  
    const categoryTasks = tasks[selectedCategory];
    if (categoryTasks.length === 0) return;
  
    setIsSpinning(true);
    let spinCount = 0;
    const maxSpins = 20;
    const spinSpeed = 60; // Faster = more spin effect
  
    const spinInterval = setInterval(() => {
      const randomTask = categoryTasks[Math.floor(Math.random() * categoryTasks.length)];
      setCurrentTask(randomTask);
      spinCount++;
  
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
  
        // Add a final delay and reveal the actual selected task
        setTimeout(() => {
          const finalTask = categoryTasks[Math.floor(Math.random() * categoryTasks.length)];
          setCurrentTask(finalTask);
          setIsSpinning(false);
        }, 300); // Pause before showing final
      }
    }, spinSpeed);
  };
  


  const startEditing = () => {
    const tasksToEdit = tasks[selectedCategory] || [];
    setEditingTasks([...tasksToEdit]); // Make a shallow copy to avoid direct mutation
    setIsEditing(true); // Open the edit modal
  };

  const saveChanges = () => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedCategory]: editingTasks
    }));
    setIsEditing(false);
  };


  const addNewTask = () => {
    if (newTask.trim()) {
      setEditingTasks(prev => [newTask.trim(), ...prev]); // ⬅️ New task goes first
      setNewTask('');
    }
  };


  const updateTask = (index: number, value: string) => {
    const updated = [...editingTasks];
    updated[index] = value;
    setEditingTasks(updated);
  };

  const removeTask = (index: number) => {
    const updated = editingTasks.filter((_, i) => i !== index);
    setEditingTasks(updated);
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

  return (
    <div className="flex-grow max-w-md mx-auto pt-12 p-4">
      <div className="bg-[#f7f2f7] dark:bg-gray-800 rounded-3xl shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#00022B] dark:text-gray-300 mb-4 text-center">
          Let’s Play
        </h2>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 appearance-none pr-10 text-gray-700 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow hover:shadow-md hover:scale-105 dark:hover:shadow-lg text-gray-600 dark:text-gray-300 transition-all duration-200"
          >
            <Edit2 size={20} />
          </button>
        </div>

        <button
          onClick={handleSpin}
          disabled={isSpinning || isEditing}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSpinning ? 'Spinning...' : 'Spin!'}
        </button>

        <div className={`bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 min-h-[120px] flex items-center justify-center text-center transition-all duration-300 w-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600`}>
          {currentTask ? (
            <p className="text-xl text-gray-800 dark:text-gray-200 font-medium break-words max-w-full">
              {currentTask}
            </p>
          ) : (
            <p className="text-gray-400 dark:text-gray-500 break-words max-w-full">
              Click spin to get your task!
            </p>
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
                <div className='flex justify-between items-center'>
                  <button
                    onClick={generateAllNewTasks}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    <RefreshCw size={18} />
                    Generate New Tasks
                  </button>
                  <button
                    onClick={saveChanges}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Save size={20} />
                    Save
                  </button>
                </div>

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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;