import WorkoutForm from '../Components/WorkoutForm';

function Home({ workouts, handleAddWorkout, handleDeleteWorkout, handleUpdateWorkout, editingWorkout, setEditingWorkout }) {
  return (
    <div className="animate-fade-in">
      <WorkoutForm 
        key={editingWorkout ? editingWorkout.id : 'new-workout'}
        onAddWorkout={handleAddWorkout} 
        editingWorkout={editingWorkout}
        onUpdateWorkout={handleUpdateWorkout}
        clearEdit={() => setEditingWorkout(null)}
      />

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Antrenman Geçmişi</h2>
        {workouts.length === 0 ? (
          <p className="text-center text-gray-400">Henüz kaydedilmiş bir set yok.</p>
        ) : (
          <ul className="text-gray-300">
            {workouts.map((workout) => (
              <li key={workout.id} className="border-b border-gray-700 py-4 flex justify-between items-center">
                <div>
                  <span className="font-bold text-blue-300 text-lg">{workout.exercise}</span> 
                  <span className="text-gray-400 ml-2">({workout.weight} kg, {workout.reps} tekrar)</span>
                </div>
                <div className="space-x-3 flex">
                  <button onClick={() => setEditingWorkout(workout)} className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition">Düzenle</button>
                  <button onClick={() => handleDeleteWorkout(workout.id)} className="text-sm bg-red-900/50 hover:bg-red-800 px-3 py-1.5 rounded text-red-300 transition">Sil</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;