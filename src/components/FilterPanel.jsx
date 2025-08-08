import React, { useState } from 'react';
import data from '../data';
import './FilterPanel.css';
import { FilterContext } from "../context/filterContext";
import Slider from '@mui/material/Slider';
const FilterPanel = () => {
  const { Filter , setFilter } = React.useContext(FilterContext); 
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [tripDuration, setTripDuration] = useState(7);
  const [minRating, setMinRating] = useState(4);
  const [sortBy, setSortBy] = useState('price');

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  const handleDurationChange = (e) => {
    
    setFilter(prev => ({ ...prev, duration: parseInt(e.target.value) }));
  };

  const handleRatingChange = (e) => {
    setFilter(prev => ({ ...prev, rating: parseInt(e.target.value) }));
  };
  const maxPrice = Math.max(...data.map(item => item.price));
  const minPrice = Math.min(...data.map(item => item.price));
  return (
    <div className="filter-panel">
      <h2 className="filter-title">Filter Options</h2>

      {/* Price Range */}
      <div className="filter-section">
        <label className="filter-label">Price Range</label>
        <div className="slider-container">
          <Slider
            value={Filter.price}
            onChange={(e, newValue) => {
              setFilter(prev => ({ ...prev, price: newValue }));
            }}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            step={100}
            className="price-slider"
          />
        </div>
        <div className="price-range-labels">
          <span className="price-label">₹{Filter.price[0]}</span>
          <span className="price-label">₹{Filter.price[1]}</span>
        </div>
      </div>

      {/* Trip Duration */}
      <div className="filter-section">
        <div className="filter-header">
          <label className="filter-label">Trip Duration (Days)</label>
          <span className="filter-value">{Filter.duration}</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          value={Filter.duration}
          onChange={handleDurationChange}
          className="range-slider"
        />
      </div>

      {/* Minimum Rating */}
      <div className="filter-section">
        <div className="filter-header">
          <label className="filter-label">Minimum Rating</label>
          <span className="filter-value">{Filter.rating}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={Filter.rating}
          onChange={handleRatingChange}
          className="range-slider"
        />
      </div>

      {/* Sort Options */}
      <div className="filter-section">
        <span className="filter-label">Sort by price</span>
        <div className="sort-buttons">
          <button
            type="button"
            onClick={() => {
              setFilter(prev => ({ ...prev, sort: "lth" }));
            }}
            className={`sort-btn ${Filter.sort === "lth" ? "active" : ""}`}
          >
            Low to High
          </button>
          <button
            type="button"
            onClick={() => {
              setFilter(prev => ({ ...prev, sort: "htl" }));
            }}
            className={`sort-btn ${Filter.sort === "htl" ? "active" : ""}`}
          >
            High to Low
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
