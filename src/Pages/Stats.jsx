function Stats({ weeks }) {
  // Tüm haftaları ve günleri tarayıp toplam antrenman sayısını hesaplıyoruz
  let totalSets = 0;
  
  if (weeks && weeks.length > 0) {
    weeks.forEach(week => {
      if (week.days && week.days.length > 0) {
        week.days.forEach(day => {
          if (day.workouts && day.workouts.length > 0) {
            totalSets += day.workouts.length;
          }
        });
      }
    });
  }
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Antrenman İstatistikleri</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-6 rounded-lg text-center shadow-inner">
          <p className="text-gray-400 text-sm mb-2">Toplam Kayıtlı Set</p>
          <p className="text-4xl font-bold text-white">{totalSets}</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg text-center shadow-inner">
          <p className="text-gray-400 text-sm mb-2">Favori Hareket</p>
          <p className="text-xl font-bold text-white mt-2">Çok Yakında</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;