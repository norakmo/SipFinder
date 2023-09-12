import React from "react";
import "./CarouselComponent.css"

export default function CarouselComponent(){
    const slides = document.getElementsByClassName("carousel-item");
    let position = 0;
    const numberOfSlides = slides.length;

    function hideAllSlides() {
        // remove all slides not currently being viewed
        for (const slide of slides) {
            slide.classList.remove("carousel-item-visible");
            slide.classList.add("carousel-item-hidden");
        }
    }

    const handleMoveToNextSlide = function() {
        hideAllSlides();
    
        // check if last slide has been reached
        if (position === numberOfSlides - 1) {
            position = 0; // go back to first slide
        } else {
            // move to next slide
            position++;
        }
        // make current slide visible
        slides[position].classList.add("carousel-item-visible");
    }

    const handleMoveToPrevSlide = function() {
        hideAllSlides();
        
        // check if we're on the first slide
        if (position === 0) {
            position = numberOfSlides - 1; // move to the last slide
        } else {
            // move back one
            position--;
        }
        // make current slide visible
        slides[position].classList.add("carousel-item-visible");
    }

    return(
        <div>
            <div className="carousel">
                
                <div className="carousel-item carousel-item-visible">
                    <img src="https://images.unsplash.com/photo-1537211261771-e525b9e4049b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80" 
                        alt="Squirrel zombie" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1503925802536-c9451dcd87b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80" 
                        alt="Zombie hands" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1509558567730-6c838437b06b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450&q=80" 
                        alt="Zombie pumpkin" />
                </div>

                <div className="carousel-actions">
                    <button id="carousel-button-prev" aria-label="Previous" onClick={handleMoveToPrevSlide}></button>
                    <button id="carousel-button-next" aria-label="Next" onClick={handleMoveToNextSlide}></button>
                </div>
            </div>
        </div>
    )
}