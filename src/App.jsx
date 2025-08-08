import './App.css';
import HeroSection from './components/heroSection';
import FilterPanel from './components/FilterPanel';
import { QueryProvider } from './context/queryContext';
import {SavedProvider } from './context/savedContext'
import List from "./components/list";
import SavedTrips from './components/SavedTrips';
import {FilterProvider } from './context/filterContext'
import React, { useState } from 'react';
function App() {
  return (
    <div>
      <FilterProvider>
      <QueryProvider>
      <HeroSection />
      <SavedProvider >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-12 mb-4'>
            <FilterPanel />
          </div>
          <div className='col-lg-9 col-md-8 col-12'>
            <List />
          </div>
        </div>
      </div>
      <SavedTrips />
      </SavedProvider>
      </QueryProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
