import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function GamePage() {
  const navigate = useNavigate();
  const [lines, setLines] = useState([]); // Store lines drawn on the cake
  const [isDrawing, setIsDrawing] = useState(false); // Track if the user is drawing
  const cakeRef = useRef(null); // Reference to the cake container
  const audioRef = useRef(null); // Reference to the audio element

  // Handle mouse down (start drawing)
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const rect = cakeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLines([...lines, { points: [{ x, y }] }]); // Start a new line
  };

  // Handle mouse move (draw lines)
  const handleMouseMove = (e) => {
    if (!isDrawing) return; // Only draw if the mouse is pressed
    const rect = cakeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add the new point to the last line
    const lastLine = lines[lines.length - 1];
    lastLine.points.push({ x, y });
    setLines([...lines.slice(0, -1), lastLine]);
  };

  // Handle mouse up (stop drawing)
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Handle play sound button click
  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Start playing the sound
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`, // Set the background image
      backgroundSize: 'cover', // Cover the entire screen
      backgroundPosition: 'center', // Center the background image
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '1rem' 
    }}>
      <div style={{ 
        background: 'white', // Opaque white background
        borderRadius: '1.5rem', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        width: '90%', // Reduce the width
        maxWidth: '36rem', // Smaller max width
        padding: '1.5rem', // Reduce padding
        textAlign: 'center' 
      }}>
        {/* Game Title */}
        <h1 style={{ fontSize: '32px', color: '#DB2777', marginBottom: '1.5rem', fontFamily:'monospace', fontWeight: '700' }}>Happy Birthdayyy Muchuuu 🌷</h1>
        {/* Play Sound Button */}
        <button
          onClick={handlePlaySound}
          style={{ fontSize: '18px', fontFamily:'monospace', fontWeight:'bold', background: '#ffd9e4', color: '#DB2777', padding: '0.5rem 1.5rem', borderRadius: '9999px', marginBottom: '1rem', cursor: 'pointer', border: 'none', outline: 'none' }}
        >
          Play Birthday Song 🎵
        </button>

        {/* Cake Image and Drawing Area */}
        <div
          ref={cakeRef}
          style={{ 
            position: 'relative', 
            marginTop: '1.5rem', 
            cursor: `url(${process.env.PUBLIC_URL}/knife.jpg), auto` // Set the cursor to knife.jpg
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <img
            src={`${process.env.PUBLIC_URL}/cake.jpg`}
            alt="Cake"
            style={{ width: '100%', maxWidth: '20rem', margin: '0 auto' }} // Smaller cake image
          />

          {/* Render Lines on the Cake */}
          {lines.map((line, lineIndex) => (
            <svg
              key={lineIndex}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Prevent the SVG from blocking mouse events
              }}
            >
              <polyline
                points={line.points.map((point) => `${point.x},${point.y}`).join(' ')}
                stroke="white"
                strokeWidth="5"
                fill="white"
              />
            </svg>
          ))}
        </div>

        {/* Eat the Cake Button (Always Visible) */}
        <button
          onClick={() => navigate('/eat-cake')}
          style={{ fontSize: '18px', fontFamily:'monospace', fontWeight:'bold', background: '#DB2777', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', marginTop: '1.5rem', cursor: 'pointer', border: 'none', outline: 'none' }}
        >
          Let's Eat the Cake! 🍰
        </button>

        {/* Audio Element with Local File */}
        <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/happy-birthday.mp3`} loop />
      </div>
    </div>
  );
}

export default GamePage;