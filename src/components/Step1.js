import React, { useState } from 'react';

function Step1({ onNext }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const triggerConfetti = () => {
    const confettiPieces = ['🎉', '💕', '✨', '🎊', '💝', '🌹', '💐', '🎈'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti animate__animated animate__fadeIn';
      confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }
  };

  const handleYesClick = () => {
    triggerConfetti();
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const handleNoMouseOver = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="step-enter">
      <div className="glass rounded-3xl p-8 md:p-12 text-center">
        <div className="mb-8 animate__animated animate__fadeInDown">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Will you go out with me? 💕
          </h1>
          <p className="text-lg text-gray-600">I have something special planned for us!</p>
        </div>

        <div className="mb-12 h-32 flex items-center justify-center">
          <p className="text-6xl animate__animated animate__heartBeat animate__infinite">💌</p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap animate__animated animate__fadeInUp">
          <button
            onMouseOver={handleNoMouseOver}
            onTouchStart={handleNoMouseOver}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
            className="btn-pulse px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-red-400 to-red-500 hover:shadow-lg transition-all duration-300"
          >
            No
          </button>
          <button
            onClick={handleYesClick}
            className="btn-pulse px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:shadow-lg transition-all duration-300"
          >
            Yes! 🎉
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
