import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterPage() {
  const [showLetter, setShowLetter] = useState(false); // Track if the letter is visible
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #FFB6C1, #DDA0DD)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '48rem', padding: '2rem', textAlign: 'center' }}>
        {/* Cute Text Message Icon */}
        <div
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center horizontally
            justifyContent: 'center', // Center vertically
            marginBottom: '2rem'
          }}
        >
          {/* Clickable Icon */}
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setShowLetter(true)} // Show the letter when clicked
          >
            <img
              src={`${process.env.PUBLIC_URL}/text.jpg`} // Add a cute message icon
              alt="Message Icon"
              style={{ width: '100px', height: '100px' }}
            />
          </div>

          {/* Non-clickable Text */}
          <p style={{ fontSize: '18px', fontFamily:'monospace', fontWeight:'bold', color: '#DB2777', marginTop: '1rem' }}>There is a letter for you!🩷</p>
        </div>

        {/* Cute Letter Message */}
        {showLetter && (
          <>
            <div style={{ background: '#FFF0F5', padding: '1.5rem', borderRadius: '1rem', border: '2px solid #FF69B4', marginTop: '2rem' }}>
              <p style={{ fontSize: '15px', fontFamily: 'monospace', fontWeight:'bold', color: '#DB2777', lineHeight: '1.6', textAlign:'left' }}>
                HAPPYYYY BIRTHDAYYYYYY FAVORITE HOOMAAAANNN!🐶💗
                Thanks for being born and always being around since we met. I love youuuuuu and have no words to desribe 
                what I have gained when I met you, yesss you annoy me and annoy me a hell lottttt!! and we definately gonna 
                fight more when we meet and this cutie patottieee (you) day is over😤😤 but till then lets consider only 
                cute cute harkate of yours and admireeeee you thoda more today!🥰🎀 Baki lets make sure your day is full of 
                gifts, smilesssss, surprises, sweetssss🍰 and lots of kissesss💋 (only from me tho, hehe)
              
                Lots of loveeeeeeee,
                Aditiiiiii💌 </p>
            </div>

            {/* Go Back Button (Only visible when letter is open) */}
            <button
              onClick={() => navigate('/')}
              style={{ fontSize: '18px', fontFamily:'monospace', fontWeight:'bold', background: '#DB2777', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', marginTop: '2rem', cursor: 'pointer', border: 'none', outline: 'none' }}
            >
              Let's make this your best day! ✨
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LetterPage;