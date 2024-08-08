import { useEffect, useRef } from "react";
import { ReviewsSvg } from "./component/reviewsUnit/reviewsSVG";
import { CommentUnit } from "./component/reviewsUnit/commentUnit";
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./styles/reviews.css";

    const img = {
        photo:'img/photo.png',
        photo2: 'img/photo2.png',
        photo3: 'img/photo3.png',
    }

export function Reviews() {
  const splideRef = useRef(null);

  useEffect(() => {
    splideRef.current = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      gap: '1rem',
      pagination: false,
      arrows: false,
      breakpoints: {
        768: {
          perPage: 1,
        },
      }
    });

    splideRef.current.mount();
  }, []);

  const handlePrev = () => {
    splideRef.current.go('<'); 
  };

  const handleNext = () => {
    splideRef.current.go('>'); 
  };

  return (
    <div className="reviews">
      <ReviewsSvg />
      <div className="reviews-block">
        <div className="reviews-container">
          <h1>What 400+ reviews say about us</h1>
          <div className="arrow-container">
            <svg 
              onClick={handlePrev} 
              width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: 'pointer' }}
            >
              <g clipPath="url(#clip0_38_294)">
                <path d="M5 12L31.5 12M5 12L11 18M5 12L11 6" stroke="#3D2E87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_38_294">
                  <rect width="24" height="32" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
                </clipPath>
              </defs>
            </svg>
            
            <svg 
              onClick={handleNext} 
              width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: 'pointer' }}
            >
              <g clipPath="url(#clip0_38_296)">
                <path d="M27 12L0.5 12M27 12L21 18M27 12L21 6" stroke="#3D2E87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_38_296">
                  <rect width="24" height="32" fill="white" transform="translate(32) rotate(90)"/>
                </clipPath>
              </defs>
            </svg>
          </div>                
        </div>  
        <div className="splide comment">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <CommentUnit
                    user={img.photo}
                    name='Julian Francis'
                    work="Quality Control Chemist"
                    t2="As part of the classes I teach, I task my students with preparing a lot of presentations. To save time who presents the good.."
                    />
              </li>
              <li className="splide__slide">
                <CommentUnit
                    user={img.photo2}
                    name='Roberto Rowe'
                    work="Licensed Embalmer"
                    t2="As part of the classes I teach, I task my students with preparing a lot of presentations. To save time & reduce boredom, I occasionally have only a pick who presents the good work!"
                    />
              </li>
              <li className="splide__slide">                
                <CommentUnit
                    user={img.photo3}
                    name='Julian Francis'
                    work="Quality Control Chemist"
                    t2="As part of the classes I teach, I task my students with preparing a lot of presentations. To save time who presents the good.."
                    />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
