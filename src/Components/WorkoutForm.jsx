import { useState } from 'react';

function WorkoutForm({ onAddWorkout, editingWorkout, onUpdateWorkout, clearEdit }) {
  // Başlangıç değerlerini güvenli (optional chaining) şekilde atıyoruz
  const [exercise, setExercise] = useState(editingWorkout?.exercise || '');
  const [weight, setWeight] = useState(editingWorkout?.weight || '');
  const [reps, setReps] = useState(editingWorkout?.reps || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !weight || !reps) return; 

    if (editingWorkout) {
      // Güncelleme işlemi
      onUpdateWorkout({
        ...editingWorkout,
        exercise,
        weight: Number(weight),
        reps: Number(reps)
      });
      clearEdit();
    } else {
      // Yeni kayıt ekleme işlemi
      onAddWorkout({
        id: Date.now(),
        exercise,
        weight: Number(weight),
        reps: Number(reps)
      });
    }

    // İşlem bitince formu temizle
    setExercise('');
    setWeight('');
    setReps('');
  };

  const handleCancel = () => {
    clearEdit();
    setExercise('');
    setWeight('');
    setReps('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200">
          {editingWorkout ? 'Seti Düzenle' : 'Yeni Set Ekle'}
        </h2>
        {editingWorkout && (
          <button type="button" onClick={handleCancel} className="text-sm text-gray-400 hover:text-white transition">
            İptal Et
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Hareket (Örn: Bench Press)</label>
          <input 
            type="text" 
            value={exercise} 
            onChange={(e) => setExercise(e.target.value)}
            className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Hareket adı"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Ağırlık (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Örn: 85"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Tekrar Sayısı</label>
          <input 
            type="number" 
            value={reps} 
            onChange={(e) => setReps(e.target.value)}
            className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Örn: 8"
          />
        </div>
      </div>
      
      <button 
        type="submit" 
        className={`w-full font-bold py-2 px-4 rounded transition duration-200 text-white 
          ${editingWorkout ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {editingWorkout ? 'Değişiklikleri Kaydet' : 'Seti Kaydet'}
      </button>
    </form>
  );
}

export default WorkoutForm;