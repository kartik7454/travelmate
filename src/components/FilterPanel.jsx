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
    <div className="    w-25 p-6 rounded-lg shadow-sm border border-gray-200 max-w-sm" style={{
       height:"400px"
      }}>
        
      <h2 className="text-xl font-bold text-gray-800 mb-6">Filter Options</h2>
      
     

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
        <div className="flex items-center gap-4">
         
          <Slider
            value={Filter.price}
            onChange={(e, newValue) => {
              
              setFilter(prev => ({ ...prev, price: newValue }));
             
            }}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            step={100}
            sx={{ width: 180 }}
          />
          
        </div>
        <div className="d-flex gap-5">
          <p className="text-sm text-gray-600">₹{Filter.price[0]}</p>
          <p className="text-sm text-gray-600">₹{Filter.price[1]}</p>
        </div>  
       
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
          <span className="text-sm text-gray-600">{Filter.rating}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={Filter.rating}
          onChange={handleRatingChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Sort Options */}
      <div className="flex gap-2">
        <p>sort by price</p>
      <button type="button" onClick={()=>{ setFilter(prev => ({ ...prev, sort:"lth"}));}} className="btn btn-primary">Low to High</button>
      <button type="button"  onClick={()=>{ setFilter(prev => ({ ...prev, sort:"htl"})) ;}} className="btn btn-primary">High to Low</button>
        
      </div>

      
    </div>
  );
};

export default FilterPanel;
