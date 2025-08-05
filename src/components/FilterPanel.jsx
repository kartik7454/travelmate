import React, { useState } from 'react';

import { FilterContext } from "../context/filterContext";
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
    setMinRating(parseInt(e.target.value));
  };

  return (
    <div className="   bg-primary w-25 p-6 rounded-lg shadow-sm border border-gray-200 max-w-sm" style={{
       height:"400px"
      }}>
        
      <h2 className="text-xl font-bold text-gray-800 mb-6">Filter Options</h2>
      
     

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
        
        
      </div>

      {/* Trip Duration */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">Trip Duration (Days)</label>
          <span className="text-sm text-gray-600">{Filter.duration}</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          value={Filter.duration}
          onChange={handleDurationChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Minimum Rating */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">Minimum Rating</label>
          <span className="text-sm text-gray-600">{minRating}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={minRating}
          onChange={handleRatingChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Sort Options */}
      <div className="flex gap-2">
        <button
          onClick={() => setSortBy('price')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            sortBy === 'price'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
          }`}
        >
          Sort by Price
        </button>
        
      </div>

      
    </div>
  );
};

export default FilterPanel;
