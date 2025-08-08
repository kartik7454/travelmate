import React from 'react';
import { SavedContext } from "../context/savedContext";
import './SavedTrips.css';
const SavedTrips = () => {
    const { Saved , setSaved } = React.useContext(SavedContext); 
    const handelClick=(id)=>{
console.log(id)
    setSaved(prev => prev.filter(item => item.id !== id));

    }
  return (
    <div className="saved-trips-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="saved-trips-title">Saved Trips</h2>
            <div className="saved-trips-grid">
              {Saved && Saved.length > 0 ? (
                Saved.map((item) => (
                  <div
                    className="saved-trip-card"
                    key={item.id || item.title}
                  >
                    <div className="trip-card-content">
                      <div className="trip-card-image">
                        <img src={item.image} alt={item.title} />
                      </div>
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
                        <button className="delete-trip-btn" onClick={() => { handelClick(item.id) }} >
                          <span>Delete Trip</span>
                          <svg className="delete-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-saved-trips">No trips saved yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedTrips;
