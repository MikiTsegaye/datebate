import React from 'react';

function SuccessScreen({ onReset }) {
  return (
    <div className="step-enter">
      <div className="glass rounded-3xl p-8 md:p-12 text-center">
        <div className="mb-8 animate__animated animate__zoomIn">
          <p className="text-7xl mb-4">🥂</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Can't wait! See you then 💝
          </h1>
          <p className="text-lg text-gray-700">
            Your invitation details have been sent!
          </p>
        </div>

        <div className="my-12 space-y-3">
          <p className="text-5xl animate__animated animate__bounce animate__infinite">✨</p>
        </div>

        <button
          onClick={onReset}
          className="btn-pulse px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-all"
        >
          Start Over ↻
        </button>
      </div>
    </div>
  );
}

export default SuccessScreen;
