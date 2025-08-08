import React, { useRef } from 'react';
import { QueryContext } from "../context/queryContext";

const HeroSection = () => {
    const { Query, setQuery } = React.useContext(QueryContext);
    const searchInputRef = useRef(null);
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    const handleStartPlanning = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
            searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <div className='d-flex justify-content-center px-3 px-md-0'>
                <div className='w-75  rounded-3 mt-3 mt-md-5 d-flex justify-content-center align-items-center position-relative' 
                     style={{height: '400px', minHeight: '300px'
                      
                     }}>
                     {/* Custom CSS for mobile: width 100% */}
                     <style>
                        {`
                          @media (max-width: 576px) {
                            .w-75 {
                              width: 100% !important;
                            }
                          }
                        `}
                     </style>
                    
                    {/* Hero Image */}
                    <img 
                        className='w-100 rounded-3 h-100 img-fluid' 
                        style={{objectFit: 'cover'}} 
                        src="/heroimage.webp" 
                        alt="Hero Image" 
                    />
                    
                    {/* Overlay for better text readability */}
                    <div className='position-absolute w-100 h-100 rounded-3' 
                         style={{
                             background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
                             top: 0,
                             left: 0
                         }}>
                    </div>
                    
                    {/* Hero Content */}
                    <div className='position-absolute text-center text-light px-3' 
                         style={{
                             top: '50%',
                             left: '50%',
                             transform: 'translate(-50%, -50%)',
                             width: '100%',
                             maxWidth: '600px'
                         }}>
                        
                        <h1 className='fs-2 fs-sm-3 fs-md-4 fs-lg-1 fw-bold mb-2 mb-md-3'>
                            Discover Your Next Adventures
                        </h1>
                        
                        <p className='fs-6 fs-sm-5 fs-md-4 mb-3 mb-md-4 px-2 px-md-0' 
                           style={{lineHeight: '1.4'}}> 
                            Explore curated travel packages to the world's most breathtaking destinations. 
                            Start planning your dream trip today.
                        </p>
                        
                        <button 
                            type="button" 
                            className="btn btn-warning px-4 py-2 px-md-5 py-md-2 fw-semibold" 
                            onClick={handleStartPlanning}
                            style={{
                                fontSize: '0.9rem',
                                borderRadius: '25px'
                            }}>
                            Start Planning
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="search-section text-center mt-4 px-3">
                <h3 className="mb-3 mb-md-4 fw-bold fs-4 fs-md-3">Find Your Perfect Trip</h3>
                <div className="d-flex justify-content-center">
                    <div className=" w-50 search-container position-relative">
                        <input 
                            onChange={(e) => {handleChange(e)}}
                            type="text" 
                            className="w-100 form-control search-input" 
                            placeholder="Where are you going?"
                            style={{
                                height: '45px',
                                backgroundColor: 'white',
                                border: 'solid',
                                borderWidth: '1px',
                                borderRadius: '25px',
                                paddingLeft: '50px',
                                fontSize: '16px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                            ref={searchInputRef}
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
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
