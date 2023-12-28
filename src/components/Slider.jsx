import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "@/config/slider.json" 
import Link from "next/link";
export default function Slider(){
    return(
        <section className="section">
          <div className="container">                      
              <div className="col-12" style={{backfaceVisibility: "hidden"}}>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {slider.main.map(
                    (item , index) => (
                      <SwiperSlide key={index}>                                               
                        <img
                          src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                          className="block w-full"
                          alt="..." />    
                        <div
                          className="absolute text-[8px] md:text-base inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                          <p className="mb-5">
                            {item.name}
                          </p>
                          <Link href="/catalog" className="py-2 px-8 rounded-lg hover:bg-blue-800 bg-gray-800 text-white">
                             BELI SEKARANG
                          </Link>
                        </div>                                                             
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>            
          </div>
        </section>
    )
}