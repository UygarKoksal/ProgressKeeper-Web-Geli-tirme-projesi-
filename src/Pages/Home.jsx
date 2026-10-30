import { useState } from 'react';
import WorkoutForm from '../Components/WorkoutForm';

function Home({ 
  weeks, 
  activeWeekId, setActiveWeekId, 
  activeDayId, setActiveDayId,
  handleAddWeek, handleUpdateWeek, handleDeleteWeek,
  handleAddDay, handleUpdateDay, handleDeleteDay,
  handleAddWorkout, handleDeleteWorkout, handleUpdateWorkout,
  handleCopyPrevious,
  editingWorkout, setEditingWorkout
}) {
  const [newWeekName, setNewWeekName] = useState('');
  const [newDayName, setNewDayName] = useState('');

  const [isEditingWeek, setIsEditingWeek] = useState(false);
  const [editWeekInput, setEditWeekInput] = useState('');

  const [isEditingDay, setIsEditingDay] = useState(false);
  const [editDayInput, setEditDayInput] = useState('');

  const activeWeek = weeks.find(w => w.id === activeWeekId);
  const activeDay = activeWeek?.days.find(d => d.id === activeDayId);

  const changeActiveWeek = (id) => {
    setActiveWeekId(id);
    setActiveDayId(null);
    setEditingWorkout(null);
    setIsEditingWeek(false);
    setIsEditingDay(false);
  };

  const changeActiveDay = (id) => {
    setActiveDayId(id);
    setEditingWorkout(null);
    setIsEditingDay(false);
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* 1. HAFTA YÖNETİCİSİ */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Program Yöneticisi</h2>
        <div className="flex gap-2 mb-4">
          <input 
            type="text" value={newWeekName} onChange={(e) => setNewWeekName(e.target.value)}
            placeholder="Örn: 1. Hafta"
            className="flex-1 bg-gray-700 text-white rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button onClick={() => { if(newWeekName) { handleAddWeek(newWeekName); setNewWeekName(''); } }} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold transition">
            Hafta Ekle
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {weeks.map(week => (
            <button 
              key={week.id}
              onClick={() => changeActiveWeek(week.id)}
              className={`px-4 py-2 rounded whitespace-nowrap transition ${activeWeekId === week.id ? 'bg-blue-500 font-bold text-white shadow' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {week.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. GÜN YÖNETİCİSİ */}
      {activeWeekId && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            {isEditingWeek ? (
              <div className="flex gap-2 w-full max-w-sm">
                <input autoFocus type="text" value={editWeekInput} onChange={(e) => setEditWeekInput(e.target.value)} className="flex-1 bg-gray-700 text-white rounded p-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <button onClick={() => { handleUpdateWeek(activeWeekId, editWeekInput); setIsEditingWeek(false); }} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition">Kaydet</button>
                <button onClick={() => setIsEditingWeek(false)} className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm transition">İptal</button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-200">{activeWeek?.name} - Günler</h3>
                <div className="space-x-2">
                  <button onClick={() => { setEditWeekInput(activeWeek?.name); setIsEditingWeek(true); }} className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition">Adı Değiştir</button>
                  <button onClick={() => { if (window.confirm('Bu haftayı ve içindeki tüm günleri silmek istediğinize emin misiniz?')) handleDeleteWeek(activeWeekId); }} className="text-xs bg-red-900/50 hover:bg-red-800 text-red-300 px-2 py-1 rounded transition">Haftayı Sil</button>
                </div>
              </>
            )}
          </div>
          
          <div className="flex gap-2 mb-4">
            <input 
              type="text" value={newDayName} onChange={(e) => setNewDayName(e.target.value)}
              placeholder="Örn: Pazartesi (Push)"
              className="flex-1 bg-gray-700 text-white rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button onClick={() => { if(newDayName) { handleAddDay(activeWeekId, newDayName); setNewDayName(''); } }} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold transition">
              Gün Ekle
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeWeek?.days.map(day => (
              <div key={day.id}>
                {isEditingDay && activeDayId === day.id ? (
                  <div className="flex gap-1 bg-gray-700 p-1 rounded border border-gray-600">
                    <input autoFocus type="text" value={editDayInput} onChange={(e) => setEditDayInput(e.target.value)} className="bg-gray-800 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <button onClick={() => { handleUpdateDay(activeWeekId, day.id, editDayInput); setIsEditingDay(false); }} className="bg-green-600 hover:bg-green-500 px-2 rounded text-white text-sm transition">Kaydet</button>
                    <button onClick={() => setIsEditingDay(false)} className="bg-gray-600 hover:bg-gray-500 px-2 rounded text-white text-sm transition">✕</button>
                  </div>
                ) : (
                  <div className={`flex items-center rounded transition ${activeDayId === day.id ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    <button onClick={() => changeActiveDay(day.id)} className={`px-4 py-2 text-sm font-medium ${activeDayId === day.id ? 'text-white' : 'text-gray-300'}`}>
                      {day.name}
                    </button>
                    
                    {activeDayId === day.id && (
                      <div className="flex items-center gap-1 pr-2 border-l border-green-500/50 pl-2 ml-1">
                        <button onClick={() => { setEditDayInput(day.name); setIsEditingDay(true); }} className="text-green-200 hover:text-white text-xs" title="Adını Değiştir">✎</button>
                        <button onClick={() => { if (window.confirm('Bu günü ve setleri silmek istediğinize emin misiniz?')) handleDeleteDay(activeWeekId, day.id); }} className="text-green-200 hover:text-red-300 text-xs ml-1" title="Günü Sil">🗑</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 3. ANTRENMAN ALANI */}
      {activeDayId && activeDay && (
        <div className="animate-fade-in">
          <WorkoutForm 
            key={editingWorkout ? editingWorkout.id : `new-${activeDay.id}`}
            onAddWorkout={(workout) => handleAddWorkout(activeWeekId, activeDayId, workout)} 
            editingWorkout={editingWorkout}
            onUpdateWorkout={(workout) => handleUpdateWorkout(activeWeekId, activeDayId, workout)}
            clearEdit={() => setEditingWorkout(null)}
          />

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mt-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">{activeDay.name} Setleri</h2>
            
            {/* EĞER LİSTE BOŞSA KOPYALAMA BUTONUNU GÖSTER */}
            {activeDay.workouts.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-400 mb-4">Bu gün için henüz set girilmedi.</p>
                
                {/* 1. Haftada değilsek kopyalama butonunu göster */}
                {weeks.findIndex(w => w.id === activeWeekId) > 0 && (
                  <button 
                    onClick={() => handleCopyPrevious(activeWeekId, activeDayId, activeDay.name)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition flex items-center justify-center mx-auto gap-2 shadow-lg hover:shadow-purple-500/50"
                  >
                    <span>✨</span> Önceki Haftadan Kopyala
                  </button>
                )}
              </div>
            ) : (
              <ul className="text-gray-300">
                {activeDay.workouts.map((workout) => (
                  <li key={workout.id} className="border-b border-gray-700 py-4 flex justify-between items-center hover:bg-gray-700/50 px-2 rounded transition">
                    <div>
                      <span className="font-bold text-blue-300 text-lg">{workout.exercise}</span> 
                      <span className="text-gray-400 ml-2">({workout.weight} kg, {workout.reps} tekrar)</span>
                    </div>
                    <div className="space-x-3 flex">
                      <button onClick={() => setEditingWorkout(workout)} className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition">Düzenle</button>
                      <button onClick={() => handleDeleteWorkout(activeWeekId, activeDayId, workout.id)} className="text-sm bg-red-900/50 hover:bg-red-800 px-3 py-1.5 rounded text-red-300 transition">Sil</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;