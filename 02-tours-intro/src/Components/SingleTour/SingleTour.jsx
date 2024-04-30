import React, { useState } from 'react';
import './SingleTour.css';
const SingleTour = ({id,image,info,price,name,removeTour}) => {
    
const [readMoreInfo, setReadMoreInfo] = useState(false)
return (
    <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            
            <p>
                {
                    readMoreInfo? info : `${info.substring(0,200)}...`
                }
                <button onClick={()=> setReadMoreInfo(!readMoreInfo)}>
                {
                    readMoreInfo? 'show less':'Read More'
                }
                </button>
            </p>

            <button 
                className='delete-btn'
                onClick={
                    () => removeTour(id)
                }
            >
                not interested
            </button>
        </footer>
     </article>
);
};

export default SingleTour;