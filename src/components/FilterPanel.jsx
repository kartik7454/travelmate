import React, { useState } from 'react';
import data from '../data';

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
    <div
      className="pt-3 ms-3 ps-4 pe-4 border rounded shadow-sm bg-white"
      style={{
        height: "450px",
        width: "300px"
      }}
    >
      <h2 className="h5 fw-bold text-dark mb-4">Filter Options</h2>

      {/* Price Range */}
      <div className="mb-4">
        <label className="form-label mb-2">Price Range</label>
        <div className="d-flex align-items-center gap-3">
          <Slider
            value={Filter.price}
            onChange={(e, newValue) => {
              setFilter(prev => ({ ...prev, price: newValue }));
            }}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            step={100}
            sx={{ width: 250 }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="text-muted small">₹{Filter.price[0]}</span>
          <span className="text-muted small">₹{Filter.price[1]}</span>
        </div>
      </div>

      {/* Trip Duration */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label mb-0">Trip Duration (Days)</label>
          <span className="text-muted small">{Filter.duration}</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          value={Filter.duration}
          onChange={handleDurationChange}
          className="form-range"
          style={{ width: '250px' }}
        />
      </div>

      {/* Minimum Rating */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label mb-0">Minimum Rating</label>
          <span className="text-muted small">{Filter.rating}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={Filter.rating}
          onChange={handleRatingChange}
          className="form-range"
          style={{ width: '250px' }}
        />
      </div>

      {/* Sort Options */}
      <div className="d-flex align-items-center gap-2">
        <span className="text-muted small">Sort by price</span>
        <button
          type="button"
          onClick={() => {
            setFilter(prev => ({ ...prev, sort: "lth" }));
          }}
          className="btn btn-sm btn-outline-primary"
        >
          Low to High
        </button>
        <button
          type="button"
          onClick={() => {
            setFilter(prev => ({ ...prev, sort: "htl" }));
          }}
          className="btn btn-sm btn-outline-primary ms-1"
        >
          High to Low
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
