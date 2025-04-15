import { useState } from 'react';
import { Edit2, X, Save, RefreshCw, Plus, ChevronDown, Wand2 } from 'lucide-react';
import { tasks as initialTasks } from './tasks2';

const Im18 = () => {
  const taskIdeas = {
    Smooth: [
      "Leave a sweet note for each other to find",
      "Recreate your first date at home"
    ],
    Fire: [
      "Make a funny face for 5 seconds",
      "Try to talk while holding your tongue (careful 😅)"
    ],
    Wild: [
      "Smile for 10 seconds without stopping",
      "Share the last thing you Googled",
      "Name three things you can see around you"
    ],
    All_Mood: [
      "Name 3 fruits that are red",
      "Think of 5 animals that live in the water"
    ]
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('All_Mood');
  const [currentTask, setCurrentTask] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTasks, setEditingTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleSpin = () => {
    const spinSound = new Audio('/sounds/Spin.mp3');
    spinSound.play();
    const categoryTasks = tasks[selectedCategory];
    if (categoryTasks.length === 0) return;
    setIsSpinning(true);
    let spinCount = 0;
    const maxSpins = 20;
    const spinSpeed = 60;
    const spinInterval = setInterval(() => {
      const randomTask = categoryTasks[Math.floor(Math.random() * categoryTasks.length)];
      setCurrentTask(randomTask);
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        setTimeout(() => {
          const finalTask = categoryTasks[Math.floor(Math.random() * categoryTasks.length)];
          setCurrentTask(finalTask);
          setIsSpinning(false);
        }, 300);
      }
    }, spinSpeed);
  };

  const startEditing = () => {
    const tasksToEdit = tasks[selectedCategory] || [];
    setEditingTasks([...tasksToEdit]);
    setIsEditing(true);
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
      setEditingTasks(prev => [newTask.trim(), ...prev]);
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
    <div className="bg-[#2b0a3d] dark:bg-[#1f082e] rounded-3xl shadow-xl p-6 space-y-6">
      <h2 className="text-2xl font-bold text-[#ff8a9a] dark:text-[#ffb1c1] mb-4 text-center">Let’s Play</h2>
  
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-[#3a1c4a] dark:bg-[#2a1536] border border-[#6e3876] dark:border-[#4e2a47] appearance-none pr-10 text-gray-200 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9b1c56] focus:border-transparent transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSpinning || isEditing}
          >
            {Object.keys(tasks).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" size={20} />
        </div>
        <button
          onClick={startEditing}
          disabled={isSpinning || isEditing}
          className="p-3 rounded-2xl bg-[#9b1c56] dark:bg-[#7c1546] shadow hover:shadow-md hover:scale-105 dark:hover:shadow-lg text-gray-200 dark:text-gray-300 transition-all duration-200"
        >
          <Edit2 size={20} />
        </button>
      </div>
  
      <button
        onClick={handleSpin}
        disabled={isSpinning || isEditing}
        className="w-full bg-[#9b1c56] hover:bg-[#7c1546] text-white font-semibold py-3 px-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? 'Spinning...' : 'Spin!'}
      </button>
  
      <div className="bg-[#3a1c4a] dark:bg-[#2a1536] rounded-2xl p-6 min-h-[120px] flex items-center justify-center text-center transition-all duration-300 w-full shadow-md hover:shadow-lg border border-[#6e3876] dark:border-[#4e2a47]">
        {currentTask ? (
          <p className="text-xl text-gray-200 dark:text-gray-300 font-medium break-words max-w-full">{currentTask}</p>
        ) : (
          <p className="text-gray-400 dark:text-gray-500 break-words max-w-full">Click spin to get your task!</p>
        )}
      </div>
  
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#2b0a3d] dark:bg-[#1f082e] rounded-2xl shadow-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#ff8a9a] dark:text-[#ffb1c1]">Edit {selectedCategory} Tasks</h2>
              <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-[#3a1c4a] dark:hover:bg-[#2a1536] rounded-full">
                <X size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
  
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={generateAllNewTasks}
                  className="flex items-center gap-2 text-[#9b1c56] hover:bg-[#f0edff] dark:hover:bg-purple-900/20 px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <RefreshCw size={18} />
                  Generate New Tasks
                </button>
                <button
                  onClick={saveChanges}
                  className="flex items-center gap-2 bg-[#9b1c56] hover:bg-[#7c1546] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
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
                  className="flex-1 px-3 py-2 border dark:border-[#4e2a47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1c56] bg-[#3a1c4a] dark:bg-[#2a1536] text-gray-200 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && addNewTask()}
                />
                <button onClick={generateTask} className="p-2 text-[#9b1c56] hover:bg-[#f0edff] dark:hover:bg-purple-900/20 rounded-lg" title="Generate random task">
                  <Wand2 size={20} />
                </button>
                <button onClick={addNewTask} className="p-2 text-[#9b1c56] hover:bg-[#f0edff] dark:hover:bg-purple-900/20 rounded-lg">
                  <Plus size={20} />
                </button>
              </div>
  
              {editingTasks.map((task, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => updateTask(index, e.target.value)}
                    className="flex-1 px-3 py-2 border dark:border-[#4e2a47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1c56] bg-[#3a1c4a] dark:bg-[#2a1536] text-gray-200 dark:text-gray-300"
                  />
                  <button onClick={() => removeTask(index)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
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

export default Im18;