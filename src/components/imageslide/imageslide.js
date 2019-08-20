import React, {useState, useEffect} from 'react';
import "./imageslide.css"

import { useTranslation } from 'react-i18next';

import img1 from './img001.jpg'
import img2 from './img002.jpg'
import img3 from './img003.jpg'
import img4 from './img004.jpg'


function ImageSlide() {
    const { t } = useTranslation();
    const img = [img1, img2, img3, img4];
    let imgIndex = 0;
    const [state, changeImg]=useState({img, imgIndex});

    const nextImg = () => {
        if(state.imgIndex<state.img.length-1){
            changeImg({...state, imgIndex: state.imgIndex+1});
        }
        else{
            changeImg({...state, imgIndex: 0});
        }
    }

    const prevImg = () => {
        if(state.imgIndex>0){
            changeImg({...state, imgIndex: state.imgIndex-1});
        }
        else{
            changeImg({...state, imgIndex: state.img.length-1});
        }
    }

    const setImag = (i) => {
        changeImg({...state, imgIndex: i});
    }

    useEffect(() => {
        var timerID = setInterval( () => nextImg(), 10000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <div className="slider" id="slider">
            {/* text part */}
            <div className="slider-text-wrapper">
                <div className="textSlide fade">{t('slide.' + state.imgIndex)}</div>
            </div>
            {/* img part */}
            <div className="slider-img-wrapper">
                {state.img.map((image, i) => {
                    let ii;
                    if(i===state.imgIndex){
                        ii = ( <img src={image} key={i} alt="Slide" className="imgSlide fade" />)
                    }
                    return ii;
                })}
            </div>
            {/* buttons arrow */}
            <span onClick={prevImg} className="prev" title={t('slide.prev')}>&#10094;</span>
            <span onClick={nextImg} className="next" title={t('slide.next')}>&#10095;</span>
            {/* dots */}
            <div className="dotSlideCenter">
                {state.img.map((image, i) => {
                    let ii;
                    if(i===state.imgIndex){
                        ii = ( <span key={i} className="dotSlide active" onClick={()=>setImag(i)}></span>)
                    } else {
                        ii = ( <span key={i} className="dotSlide" onClick={()=>setImag(i)}></span>)
                    }
                    return ii;
                })}
            </div>
        </div>
    );

}

export default ImageSlide;
