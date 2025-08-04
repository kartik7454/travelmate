import './App.css';
import HeroSection from './components/heroSection';
import FilterPanel from './components/FilterPanel';
import { QueryProvider } from './context/queryContext';
import List from "./components/list";

function App() {
  return (
    <div>
      <QueryProvider>
      <HeroSection />
      <div className='d-flex'>
        <FilterPanel />
     <List />
      </div>
      </QueryProvider>
    </div>
  );
}

export default App;
