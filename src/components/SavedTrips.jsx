import React from 'react';
import { SavedContext } from "../context/savedContext";
const SavedTrips = () => {
    const { Saved , setSaved } = React.useContext(SavedContext); 
    const handelClick=(id)=>{
console.log(id)
    setSaved(prev => prev.filter(item => item.id !== id));

    }
  return (
    <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <h2 className="mb-4 fw-bold"  >Saved Trips</h2>
      {Saved && Saved.length > 0 ? (
        Saved.map((item) => (
          <div
            className="trip-card"
            key={item.id || item.title}
            style={{
              width: "1000px",
              margin: "20px auto",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div className="trip-card-content">
              <div className="trip-card-text">
                <div className="featured-label">Featured</div>
                <h3 className="trip-title">{item.title}</h3>
                <p className="trip-description">{item.description}</p>
                <div className="trip-meta">
                  <div className="price-section">
                    <span className="price">${item.price}</span>
                    <span className="price-unit">per person</span>
                  </div>
                  <div className="review-section">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`star ${i < item.rating ? 'filled' : ''}`}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="save-trip-btn" onClick={() => { handelClick(item.id) }} >
                  <span>delete</span>
                  <svg className="bookmark-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="trip-card-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No trips saved</div>
      )}
    </div>
  );
};

export default SavedTrips;
