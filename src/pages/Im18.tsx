import { useState } from 'react';
import { Edit2, X, Save, RefreshCw, Plus, ChevronDown, Wand2 } from 'lucide-react';
import { tasks as initialTasks } from './tasks2';
// import { tasks as initialTasks } from './tasks';
import { useEffect } from 'react';

const Im18 = () => {
    const spinTasks = 'spinTasks-im18'
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTasks = localStorage.getItem(spinTasks);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }
  }, []);
  

  const taskIdeas = {
    Smooth: [
      "Give your partner a 1-minute forehead kiss session.",
      "Whisper three things you love about your partner, slowly.",
      "Lightly massage your partner’s hands or shoulders for 2 minutes.",
      "Play your partner’s favorite song and slow dance together.",
      "Run your fingers slowly through your partner’s hair or neck.",
      "Share your favorite memory together—while holding eye contact.",
      "Kiss your partner like it’s your first time again.",
      "Gently trace your lips along your partner’s neck (with permission).",
      "Cuddle in silence for one full minute.",
      "Hold your partner’s face and tell them your favorite thing about them.",
      "Trace your partner’s lips with your finger—slow and soft.",
      "Whisper a compliment into your partner’s ear while holding them close.",
      "Share one compliment you’ve never told your partner before—while holding their hand.",
      "Brush your lips along your partner’s shoulder, slowly.",
      "Hold your partner close and match each other’s breathing for 1 minute.",
      "Lightly trace circles on your partner’s back with your fingers.",
      "Tell your partner one reason you’re grateful for them—while looking into their eyes.",
      "Dance slowly to a song only you can hear (just hum it).",
      "Lay your head on your partner’s lap and let them play with your hair.",
    ],
    Fire: [
      "Describe how you’d seduce your partner in one sentence—make it steamy.",
      "Remove one clothing item (your choice).",
      "Let your partner blindfold you for 1 minute and surprise you with a gentle touch.",
      "Share your favorite fantasy (keep it playful or deep).",
      "Slowly kiss your partner’s favorite spot (neck, shoulder, etc.).",
      "Recreate a movie-style kiss scene.",
      "Choose one spot your partner can kiss you—no questions.",
      "Let your partner guide your hands for 1 minute—wherever they want (within comfort).",
      "Give a slow kiss, then pause 1 inch away for 5 seconds.",
      "Describe your partner’s body using only metaphors.",
      "Whisper your favorite dirty thought to your partner.",
      "Pick a body part—kiss it 3 different ways.",
      "Ask your partner where they want to be kissed—then do it slowly.",
      "Bite your partner’s lip gently, then whisper something daring.",
      "Let your partner remove an accessory or clothing item for you.",
      "Describe how you’d kiss your partner if there were no time limits.",
      "Let your partner trace their fingers over your lips—while you stay still.",
      "Close your eyes and let your partner guide your next move.",
      "Sit on your partner’s lap and whisper a secret fantasy.",
    ],
    Wild: [
      "Roleplay a 30-second scene where you're both strangers meeting for the first time.",
      "Use your phone to send a naughty message—even if you're sitting together.",
      "Choose a 'no hands' challenge: kiss or tease without hands for 30 seconds.",
      "Give your partner a strip tease (one item, slow).",
      "Whisper your wildest dream or desire—make it vivid.",
      "Let your partner tie your hands gently for 2 minutes and kiss you wherever they like (consent first).",
      "Do a lap dance for your partner (just have fun with it).",
      "Set a timer for 1 minute: only kissing—everywhere but the lips.",
      "Act like you're in a steamy music video—your partner is the camera.",
      "Switch roles: dominant and submissive for 1 round.",
      "Lick or kiss your partner's ear while saying something bold.",
      "Draw something naughty on your partner’s body (with fingers or ice).",
      "Act out a flirty scene from your favorite movie—no script!",
      "Take turns daring each other to kiss a body part—3 rounds.",
      "Use an object nearby to tease your partner for 30 seconds (nothing too crazy).",
      "Let your partner 'pose' you like a mannequin—then kiss the result.",
      "Speak only in sultry whispers for the next 2 minutes.",
      "Swap shirts (or outfits) and stay that way for the next turn.",
      "Do a 1-minute improv scene as a 'temptation' character—make your partner blush.",
    ],
    All_Mood: [
      "Run your fingers slowly through your partner’s hair or neck.",
      "Share your favorite memory together—while holding eye contact.",
      "Remove one clothing item (your choice).",
      "Let your partner blindfold you for 1 minute and surprise you with a gentle touch.",
      "Roleplay a 30-second scene where you're both strangers meeting for the first time.",
      "Use your phone to send a naughty message—even if you're sitting together.",
      "Choose a 'no hands' challenge: kiss or tease without hands for 30 seconds.",
      "Whisper your favorite dirty thought to your partner.",
      "Pick a body part—kiss it 3 different ways.",
      "Trace your partner’s lips with your finger—slow and soft.",

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
    const updatedTasks = {
      ...tasks,
      [selectedCategory]: editingTasks
    };
    setTasks(updatedTasks);
    localStorage.setItem(spinTasks, JSON.stringify(updatedTasks));
    
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
      <div className="bg-gray-900 dark:bg-gray-900 rounded-3xl shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#ff8a9a] dark:text-[#ffb1c1] mb-4 text-center">Let’s Play (18+)</h2>

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