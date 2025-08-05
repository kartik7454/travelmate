import './App.css';
import HeroSection from './components/heroSection';
import FilterPanel from './components/FilterPanel';
import { QueryProvider } from './context/queryContext';
import {SavedProvider } from './context/savedContext'
import List from "./components/list";
import SavedTrips from './components/SavedTrips';
import {FilterProvider } from './context/filterContext'
function App() {
  return (
    <div>
      <FilterProvider>
      <QueryProvider>
      <HeroSection />
      <SavedProvider >
      <div className='d-flex'>
        <FilterPanel />
     <List />
      </div>
      <SavedTrips />
      </SavedProvider>
      </QueryProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
