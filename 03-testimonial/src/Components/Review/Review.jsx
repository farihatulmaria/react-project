import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../data/data';
import './Review.css';


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = people[index];
    const checkTheNumber = (num) => {
        if(num > people.length -1){
            return 0;
        }
        if(num < 0){
            return people.length -1;
        }
        return num;
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkTheNumber(newIndex) ;
        });
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkTheNumber(newIndex) ;
        });
    }

    const randomPerson = () => {
        let randomNum = Math.floor(Math.random() * people.length);
        if(randomNum === index){
            randomNum = index + 1;
        }
        setIndex(checkTheNumber(randomNum))
    }

    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className ="person-img"/>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>suprise me</button>
        </article>
    );
};



export default Review;