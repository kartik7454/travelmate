import React from 'react';
import './TripCard.css';
import { SavedContext } from "../context/savedContext";

const TripCard = ( props ) => {
  const { Saved , setSaved } = React.useContext(SavedContext); 
  const handelClick =()=>{
   setSaved(prev => [
     ...prev,
     {
       id: props.id,
       title: props.title,
       description: props.description,
       image: props.image,
       price: props.price,
       duration: props.duration,
       rating: props.rating
     }
   ]);
  }
  return (
    <div className="trip-card ">
     
      <div className="trip-card-content">
        <div className="trip-card-text">
          <div className="featured-label">Featured</div>
          <h3 className="trip-title">{props.title}</h3>
          <p className="trip-description">{props.description}</p>
          <div className="trip-meta">
            <div className="price-section">
              <span className="price">${props.price}</span>
              <span className="price-unit">per person</span>
            </div>
            <div className="review-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`star ${i < props.rating ? 'filled' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
            </div>
          </div>
          <button className="save-trip-btn" onClick={()=>{handelClick()}}>
            <span>Save Trip</span>
            <svg className="bookmark-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div className="trip-card-image">
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    </div>
  );
};

export default TripCard;
