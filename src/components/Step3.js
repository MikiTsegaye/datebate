import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Step3({
  selectedDate,
  selectedActivity,
  specificChoice,
  onBack,
  onNext,
  isSending,
  onSendingChange
}) {
  const [error, setError] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatInvitationMessage = () => {
    return `
I'd love to spend time with you!

📅 Date: ${formatDate(selectedDate)}
🎯 Activity: ${selectedActivity}
💝 Preference: ${specificChoice}

Looking forward to creating amazing memories together! ✨
    `.trim();
  };

  const handleSend = async () => {
    setError('');
    onSendingChange(true);

    try {
      const emailData = {
        email: 'milki2014@gmail.com',
        date_chosen: formatDate(selectedDate),
        main_activity: selectedActivity,
        specific_choice: specificChoice
      };

      const response = await emailjs.send(
        'service_jd01ur6', // Your EmailJS Service ID
        'template_twchcky', // Your EmailJS Template ID
        emailData
      );

      console.log('Email sent successfully:', response);
      onSendingChange(false);
      onNext();
    } catch (err) {
      console.error('Error sending email - Full error:', err);
      console.error('Error message:', err?.message);
      console.error('Error status:', err?.status);
      console.error('Error text:', err?.text);
      setError(`Failed to send: ${err?.message || err?.status || err}`);
      onSendingChange(false);
    }
  };

  return (
    <div className="step-enter">
      <div className="glass rounded-3xl p-8 md:p-12">
        {/* Progress Indicator */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-1 bg-green-500 rounded flex-1"></div>
          <span className="text-sm font-semibold text-gray-600">Step 3 of 3</span>
          <div className="h-1 bg-gray-300 rounded flex-1"></div>
        </div>

        {/* Summary Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">✨ Let's confirm the details!</h2>

          <div className="space-y-4 mb-8">
            {/* Date Summary */}
            <div className="glass rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-sm text-gray-600">📅 Date Chosen</p>
              <p className="text-lg font-semibold text-gray-800">{formatDate(selectedDate)}</p>
            </div>

            {/* Activity Summary */}
            <div className="glass rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-600">🎯 Main Activity</p>
              <p className="text-lg font-semibold text-gray-800">{selectedActivity}</p>
            </div>

            {/* Specific Choice Summary */}
            <div className="glass rounded-lg p-4 border-l-4 border-pink-500">
              <p className="text-sm text-gray-600">💝 Your Preference</p>
              <p className="text-lg font-semibold text-gray-800">{specificChoice}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mb-8">
            Ready to send these details to your email? We'll get started on making this special! 🎉
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            disabled={isSending}
            className="btn-pulse flex-1 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={handleSend}
            disabled={isSending}
            className="btn-pulse flex-1 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSending ? (
              <>
                <div className="spinner"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Invitation Details!</span>
                <span>✨</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Step3;
