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
  <div className="max-w-3xl relative top-32 lg:top-56 text-center mx-auto ">
      <h1   data-aos="fade-down"
         data-aos-delay="200"
    data-aos-duration="2000"
   className="mb-5 text-2xl text-gray-100 md:text-5xl font-bold font-serif italic">The Style For Today</h1>
      
      <p data-aos="fade-in" data-aos-delay="300"  data-aos-duration="2000"   className="mb-5 text-white  md:text-xl ">Discover the latest trends in fashion and accessories</p>
      <div  className="flex flex-col md:flex-row gap-10 justify-center items-center ">


  
     
     <a  href='#products'
            data-aos="fade-right"
         data-aos-delay="400"
         data-aos-duration="2000"
       className="bg-blue-600 font-bold px-10 py-2 rounded-full border-b-4 hover:border-b-0 border-blue-900 max-w-[300px]  text-white hover:bg-blue-700 hover:text-white hover:scale-105 mr-5">Check it</a>   
    
      
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
          <SwiperSlide><img  className='w-full h-[400px] lg:min-h-screen' src="https://previews.123rf.com/images/oleksiispesyvtsev/oleksiispesyvtsev1910/oleksiispesyvtsev191000020/132555149-row-of-school-bags-and-backpacks-hanging-in-shopping-mall.jpg" alt="" loading="lazy" /></SwiperSlide>
     <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://i.pinimg.com/736x/04/6b/90/046b90967e32652f9667b13b9993ebf6.jpg" alt="" /></SwiperSlide>


       <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://static.vecteezy.com/system/resources/previews/027/528/118/non_2x/denim-pants-in-clothing-store-jeans-on-hanger-hanging-on-rack-in-clothing-store-fashion-retail-shop-inside-shopping-mall-clothes-on-hangers-in-a-clothes-shop-denim-jeans-display-on-clothing-rack-photo.JPG" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://image.made-in-china.com/44f3j00WKBqikMhljoU/Portable-Sports-Gradient-Color-Drinking-Water-Bottle-3PCS-Set-Motivational-Water-Bottles-Set-3-in-1-2000ml-900ml-300ml.webp" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] lg:min-h-screen' src="https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.jpg" alt="" /></SwiperSlide>

     

    </Swiper>
  
   </div>
  );
};

export default Banner;