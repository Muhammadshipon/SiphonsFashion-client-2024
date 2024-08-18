import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [reviews,setReviews] = useState([]);
  const getData = async()=>{
    const res = await fetch('http://localhost:3000/reviews')
    const data = await res.json();
      setReviews(data)
  }

  useEffect(()=>{
    setTimeout(() => {
      getData();
    }, 100); 
  },[])

  return (
    <div className='mt-14'>
      <>
    <section>
     
    <Swiper
        key={reviews.length}
        effect={'coverflow'}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mb-32"
        breakpoints={{
          // When window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 4,
            centeredSlides: true,
          },
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          // When window width is >= 640px (small tablets, large phones)
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // When window width is >= 320px (small phones)
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
        }}
      >

        {
          reviews?.map((review,i)=>
            <SwiperSlide key={i}>
           <ReviewCard comment={review}></ReviewCard>
            </SwiperSlide>
          )
        }
        
       
      </Swiper>
    </section>
    </>
    </div>
  );
};

export default Reviews;