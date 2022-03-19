import React from 'react';
import Tour from '../SingleTour/SingleTour';
import './AllTour.css';
const AllTour = ({tours ,removeTour}) => {
    
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div className='all-tours'>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>

                })
            }
            </div>
        </section>
    );
};

export default AllTour;