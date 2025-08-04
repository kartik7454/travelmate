import React from 'react';
import { QueryContext } from "../context/queryContext";
const HeroSection = () => {
    const { Query , setQuery } = React.useContext(QueryContext); 
     
  return (
   
    <div> 
       
        <div className='d-flex justify-content-center  '>
     <div className=' w-75 rounded-3    mt-5 d-flex justify-content-center align-items-center  ' style={{height: '500px'}}>
        <h1 className='position-absolute text-light  '>Discover Your Next Adventure </h1>
        <p className='position-absolute text-light top-50    '> Explore curated travel packages to the world's most breathtaking destinations. Start planning your dream trip today.   </p>
        <button type="button" class="btn btn-warning position-absolute " style={{top:'370px'}}>Start Planning</button>
                   <img className='w-100 rounded-3   h-100 img-fluid' style={{objectFit: 'cover'}} src="/heroimage.webp" alt="Hero Image" />
     </div>
     
    </div>
    <div className="search-section text-center mt-4">
        <h3 className="mb-4 fw-bold">Find Your Perfect Trip</h3>
        <div className="search-container position-relative d-inline-block">
          <input 
        //   value={query }
            type="text" 
            className="form-control search-input" 
            placeholder="Where are you going?"
            style={{
              width: '700px',
              height: '40px',
              backgroundColor: '#f5f5dc',
              border: 'none',
              borderRadius: '25px',
              paddingLeft: '50px',
              fontSize: '16px'
            }}
          />
          <i 
            className="fas fa-search position-absolute" 
            style={{
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6c757d'
            }}
          ></i>
        </div>
      </div></div>
   
  );
};

export default HeroSection;
