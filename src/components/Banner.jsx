import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = ( ) => {
 
  return (
   <div >
    
    <div className='relative '>
<div className="mx-auto h-[400px] lg:min-h-screen ml-16 absolute z-30  md:w-[90%] p-5   mr-10 bg-gradient-to-r from-[rgb(0,0,0,0)] via-[rgb(0,0,0,0.4)] to-[rgb(0,0,0,0)]" >
<div className=" rounded-[20px]"></div>
  <div className=" text-left text-neutral-content ">
  <div className="max-w-3xl relative top-32 lg:top-44 text-center mx-auto ">
      <h1   data-aos="fade-up"
    
    data-aos-delay="50"
    data-aos-duration="1000"
   className="mb-5 text-2xl text-gray-100 md:text-5xl font-bold font-serif italic">Unleash Your Fashion Potential</h1>
      
      <p data-aos="fade-in" data-aos-delay="50"  data-aos-duration="1000"   className="mb-5 text-white  md:text-xl ">Discover the latest trends in fashion and accessories</p>
      <div  className="flex flex-col md:flex-row gap-10 justify-center items-center ">


  
     
     <button  data-aos="fade-right"
         data-aos-delay="50"
         data-aos-duration="1000"
       className="bg-orange-500 font-bold px-10 py-2 rounded-full border-b-4 hover:border-b-0 border-orange-700 max-w-[300px]  text-white hover:bg-orange-700 hover:text-white hover:scale-105 mr-5">Check it</button>   
    
      
      </div>

      
    </div>
  </div>
</div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        className="mySwiper"
      >
          <SwiperSlide><img  className='w-full h-[400px] lg:min-h-screen' src="https://facts.net/wp-content/uploads/2022/04/types-of-bags.jpg" alt="" loading="lazy" /></SwiperSlide>
     <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://thumbs.dreamstime.com/b/nike-sports-shoes-28089948.jpg" alt="" /></SwiperSlide>


         <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://as1.ftcdn.net/v2/jpg/03/38/15/74/1000_F_338157434_FUC0TjEe8pB6Zr5G2ybfldS3tmsXv020.jpg" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://www.usatoday.com/gcdn/presto/2019/12/16/USAT/fb6fdacc-7b0d-44ad-9375-0bc617457e1e-Shot_by_BG_-_12_1.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://www.macworld.com/wp-content/uploads/2024/07/Best-earbuds-for-iPhone.jpg?quality=50&strip=all" alt="" /></SwiperSlide>

     

    </Swiper>
  
   </div>
  );
};

export default Banner;