import React, { useState } from 'react';

const FilterPanel = () => {
 
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
    setTripDuration(parseInt(e.target.value));
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
        <div className="relative h-2 bg-gray-200 rounded-lg">
          {/* Track fill */}
          <div 
            className="absolute h-2 bg-gray-400 rounded-lg"
            style={{
              left: `${(priceRange[0] / 5000) * 100}%`,
              right: `${100 - (priceRange[1] / 5000) * 100}%`
            }}
          ></div>
          
          {/* Min slider */}
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
            style={{ zIndex: 3 }}
          />
          
          {/* Max slider */}
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
            style={{ zIndex: 4 }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Trip Duration */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">Trip Duration (Days)</label>
          <span className="text-sm text-gray-600">{tripDuration}</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          value={tripDuration}
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
