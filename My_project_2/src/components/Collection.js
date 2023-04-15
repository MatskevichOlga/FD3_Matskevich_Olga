import React , { useState }from 'react';
import './Collection.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
// import required modules
import {Keyboard, Scrollbar,Autoplay, FreeMode, Navigation, Thumbs, EffectCreative, Pagination } from "swiper";

 export const Collection = ({ images, name }) => {
 const [img, setImg]=useState(true);
 //const [count, setCount]=useState(0);
 
    return (
        <div className="collection">
            <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            modules={[Keyboard,FreeMode, Scrollbar, Navigation, Thumbs, Autoplay,EffectCreative, Pagination ]}
            grabCursor={true}
            effect={"creative"}
            speed={1000}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
            enabled: true,
            }}
            scrollbar={true}
            navigation={true}
            slidesPerView={1}
            centeredSlides={false}
            creativeEffect={{
             prev: {
             shadow: true,
             translate: ["-130%", 0, -500],
             },
             next: {
             shadow: true,
             translate: ["130%", 0, -500],
              },
             }}
            className="mySwiper2"
                    >
  <ul>{images.map((image, index) =>
      <SwiperSlide onClick={() => setImg(false)} key={index}>
        <li key={index}>
          <img className="collection__big" src= {image} alt="Item" />
 
           </li>
      {img}
        </SwiperSlide>
        )
        }      
   </ul>
  </Swiper>  
       <h3>{name}</h3>

</div>
      
    );
  };

/*       <div className="buttons-collection">
          <button className="reset-input btn-del" onClick={() => setImg("")} data-title="Удалить фото">Удалить</button>
       </div> 
         <div className="buttons-collection">
    <button className="reset-input btn-add" data-title="Добавить фото">Добавить</button>
  </div> 
  */