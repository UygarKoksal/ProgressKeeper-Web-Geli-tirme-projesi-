import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import { useLocalStorage } from './Utils/useLocalStorage'; // YENİ: Kendi yazdığımız aracı içe aktardık

function App() {
  // YENİ: O uzun useState ve useEffect kodları yerine sadece tek satır yazdık!
  const [workouts, setWorkouts] = useLocalStorage('workouts', []);

  const [editingWorkout, setEditingWorkout] = useState(null);

  const handleAddWorkout = (newWorkout) => setWorkouts([...workouts, newWorkout]);
  
  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
    if (editingWorkout && editingWorkout.id === id) setEditingWorkout(null);
  };

  const handleUpdateWorkout = (updatedWorkout) => {
    setWorkouts(workouts.map((w) => w.id === updatedWorkout.id ? updatedWorkout : w));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                workouts={workouts}
                handleAddWorkout={handleAddWorkout}
                handleDeleteWorkout={handleDeleteWorkout}
                handleUpdateWorkout={handleUpdateWorkout}
                editingWorkout={editingWorkout}
                setEditingWorkout={setEditingWorkout}
              />
            } 
          />
          <Route path="/stats" element={<Stats workouts={workouts} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;