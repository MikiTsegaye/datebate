import React, { useEffect } from 'react';

function Step2({
  selectedDate,
  selectedActivity,
  specificChoice,
  onDateChange,
  onActivityChange,
  onChoiceChange,
  onBack,
  onNext
}) {
  const isValid = selectedDate && selectedActivity && specificChoice;

  const handleActivitySelect = (activity, substepType) => {
    onActivityChange(activity);
    onChoiceChange('');
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
      dateInput.min = today;
    }
  }, []);

  const foodOptions = ['Asian', 'Meat', 'Italian', 'Ethiopian', 'Sushi'];

  return (
    <div className="step-enter">
      <div className="glass rounded-3xl p-8 md:p-12">
        {/* Progress Indicator */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-300 rounded"></div>
          <span className="text-sm font-semibold text-gray-600">Step 2 of 3</span>
          <div className="flex-1 h-1 bg-gray-300 rounded"></div>
        </div>

        {/* Date Picker Section */}
        <div className="mb-10 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 When is it happening?</h2>
          <div className="relative">
            <input
              id="dateInput"
              type="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full px-6 py-4 rounded-xl glass text-lg font-medium text-gray-800 bg-white/50 border border-gray-200 hover:border-purple-400"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
              📆
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Choose a date that works for you!</p>
        </div>

        {/* Activity Selection Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎬 What are we doing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Movie Card */}
            <div
              onClick={() => handleActivitySelect('Movie', 'genre')}
              className={`activity-card glass rounded-2xl p-6 border-2 ${
                selectedActivity === 'Movie' ? 'selected border-purple-500' : 'border-transparent'
              }`}
            >
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-xl font-bold text-gray-800">Movie</h3>
              <p className="text-sm text-gray-600 mt-2">Let's watch something amazing</p>
            </div>

            {/* Eat Something Card */}
            <div
              onClick={() => handleActivitySelect('Eat Something', 'food')}
              className={`activity-card glass rounded-2xl p-6 border-2 ${
                selectedActivity === 'Eat Something' ? 'selected border-purple-500' : 'border-transparent'
              }`}
            >
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="text-xl font-bold text-gray-800">Eat Something</h3>
              <p className="text-sm text-gray-600 mt-2">Good food, great company</p>
            </div>

            {/* Special Activity Card */}
            <div
              onClick={() => handleActivitySelect('Special Activity', 'special')}
              className={`activity-card glass rounded-2xl p-6 border-2 ${
                selectedActivity === 'Special Activity' ? 'selected border-purple-500' : 'border-transparent'
              }`}
            >
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-gray-800">Special Activity</h3>
              <p className="text-sm text-gray-600 mt-2">Something unique & memorable</p>
            </div>
          </div>

          {/* Sub-steps */}
          <div className="space-y-6">
            {/* Movie Genre Sub-step */}
            {selectedActivity === 'Movie' && (
              <div className="hidden-content show">
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  What genre would you like?
                </label>
                <input
                  type="text"
                  placeholder="e.g., Comedy, Thriller, Romance..."
                  value={specificChoice}
                  onChange={(e) => onChoiceChange(e.target.value)}
                  className="w-full px-6 py-3 rounded-xl glass text-gray-800 placeholder-gray-400 border border-gray-200"
                />
              </div>
            )}

            {/* Food Type Sub-step */}
            {selectedActivity === 'Eat Something' && (
              <div className="hidden-content show">
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  What type of cuisine?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {foodOptions.map((food) => (
                    <button
                      key={food}
                      onClick={() => onChoiceChange(food)}
                      className={`option-btn px-4 py-3 rounded-lg glass border-2 font-medium text-gray-800 hover:border-purple-400 ${
                        specificChoice === food
                          ? 'selected bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'border-gray-200'
                      }`}
                    >
                      {food === 'Asian' && '🥢'} {food === 'Meat' && '🍖'} {food === 'Italian' && '🍝'}{' '}
                      {food === 'Ethiopian' && '🌶️'} {food === 'Sushi' && '🍣'} {food}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Activity Sub-step */}
            {selectedActivity === 'Special Activity' && (
              <div className="hidden-content show">
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  Type your wish...
                </label>
                <textarea
                  placeholder="What would make this special for you?"
                  value={specificChoice}
                  onChange={(e) => onChoiceChange(e.target.value)}
                  rows="4"
                  className="w-full px-6 py-3 rounded-xl glass text-gray-800 placeholder-gray-400 border border-gray-200 resize-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="btn-pulse flex-1 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className={`btn-pulse flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all ${
              isValid
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next: Review & Send 📬
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
