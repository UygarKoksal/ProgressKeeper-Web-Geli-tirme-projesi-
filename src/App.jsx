import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import { useLocalStorage } from './Utils/useLocalStorage';

function App() {
  const [weeks, setWeeks] = useLocalStorage('fitness_weeks', []);
  const [activeWeekId, setActiveWeekId] = useState(null);
  const [activeDayId, setActiveDayId] = useState(null);
  const [editingWorkout, setEditingWorkout] = useState(null);

  // --- HAFTA YÖNETİMİ (Otomatik 7 gün şablonu eklendi) ---
  const handleAddWeek = (weekName) => {
    const defaultDays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    
    const generatedDays = defaultDays.map((dayName, index) => ({
      id: Date.now() + index, 
      name: dayName,
      workouts: []
    }));

    setWeeks([...weeks, { id: Date.now() + 100, name: weekName, days: generatedDays }]);
  };

  const handleUpdateWeek = (weekId, newName) => {
    setWeeks(weeks.map(w => w.id === weekId ? { ...w, name: newName } : w));
  };

  const handleDeleteWeek = (weekId) => {
    setWeeks(weeks.filter(w => w.id !== weekId));
    if (activeWeekId === weekId) {
      setActiveWeekId(null);
      setActiveDayId(null);
    }
  };

  // --- GÜN YÖNETİMİ ---
  const handleAddDay = (weekId, dayName) => {
    setWeeks(weeks.map(w => w.id === weekId ? { ...w, days: [...w.days, { id: Date.now(), name: dayName, workouts: [] }] } : w));
  };

  const handleUpdateDay = (weekId, dayId, newName) => {
    setWeeks(weeks.map(w => w.id === weekId ? { ...w, days: w.days.map(d => d.id === dayId ? { ...d, name: newName } : d) } : w));
  };

  const handleDeleteDay = (weekId, dayId) => {
    setWeeks(weeks.map(w => w.id === weekId ? { ...w, days: w.days.filter(d => d.id !== dayId) } : w));
    if (activeDayId === dayId) setActiveDayId(null);
  };

  // --- ANTRENMAN (SET) YÖNETİMİ ---
  const handleAddWorkout = (weekId, dayId, newWorkout) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        const updatedDays = week.days.map(day => day.id === dayId ? { ...day, workouts: [...day.workouts, newWorkout] } : day);
        return { ...week, days: updatedDays };
      }
      return week;
    }));
  };

  const handleDeleteWorkout = (weekId, dayId, workoutId) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        const updatedDays = week.days.map(day => day.id === dayId ? { ...day, workouts: day.workouts.filter(w => w.id !== workoutId) } : day);
        return { ...week, days: updatedDays };
      }
      return week;
    }));
    if (editingWorkout && editingWorkout.id === workoutId) setEditingWorkout(null);
  };

  const handleUpdateWorkout = (weekId, dayId, updatedWorkout) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        const updatedDays = week.days.map(day => day.id === dayId ? { ...day, workouts: day.workouts.map(w => w.id === updatedWorkout.id ? updatedWorkout : w) } : day);
        return { ...week, days: updatedDays };
      }
      return week;
    }));
  };

  // --- GEÇMİŞ HAFTADAN KOPYALAMA ---
  const handleCopyPrevious = (weekId, dayId, dayName) => {
    const currentWeekIndex = weeks.findIndex(w => w.id === weekId);
    
    if (currentWeekIndex === 0) {
      alert("Bu ilk hafta olduğu için kopyalanacak önceki bir hafta yok.");
      return;
    }

    const previousWeek = weeks[currentWeekIndex - 1];
    const previousDay = previousWeek.days.find(d => d.name.toLowerCase() === dayName.toLowerCase());

    if (previousDay && previousDay.workouts.length > 0) {
      const copiedWorkouts = previousDay.workouts.map((w, index) => ({
        ...w,
        id: Date.now() + index 
      }));

      setWeeks(weeks.map(week => {
        if (week.id === weekId) {
          const updatedDays = week.days.map(day => day.id === dayId ? { ...day, workouts: copiedWorkouts } : day);
          return { ...week, days: updatedDays };
        }
        return week;
      }));
    } else {
      alert(`Önceki haftada "${dayName}" adında dolu bir gün bulunamadı.`);
    }
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
                weeks={weeks}
                activeWeekId={activeWeekId} setActiveWeekId={setActiveWeekId}
                activeDayId={activeDayId} setActiveDayId={setActiveDayId}
                handleAddWeek={handleAddWeek} handleUpdateWeek={handleUpdateWeek} handleDeleteWeek={handleDeleteWeek}
                handleAddDay={handleAddDay} handleUpdateDay={handleUpdateDay} handleDeleteDay={handleDeleteDay}
                handleAddWorkout={handleAddWorkout} handleDeleteWorkout={handleDeleteWorkout} handleUpdateWorkout={handleUpdateWorkout}
                handleCopyPrevious={handleCopyPrevious}
                editingWorkout={editingWorkout} setEditingWorkout={setEditingWorkout}
              />
            } 
          />
          <Route path="/stats" element={<Stats weeks={weeks} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;