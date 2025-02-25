import React from 'react';
import { useNavigate } from 'react-router-dom';

function EatCakePage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #FFB6C1, #DDA0DD)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '48rem', padding: '2rem', textAlign: 'center' }}>
        {/* Cake Piece Image */}
        <img
          src={`${process.env.PUBLIC_URL}/piece.jpg`}
          alt="Cake Piece"
          style={{ width: '100%', maxWidth: '24rem', margin: '0 auto', marginBottom: '2rem' }}
        />

        {/* Ate! Button */}
        <button
          onClick={() => navigate('/letter')} // Redirect to the Letter Page
          style={{ fontSize: '18px', fontFamily:'monospace', fontWeight:'bold', background: '#DB2777', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', cursor: 'pointer', border: 'none', outline: 'none' }}
        >
          Ate! 🍰
        </button>
      </div>
    </div>
  );
}

export default EatCakePage;