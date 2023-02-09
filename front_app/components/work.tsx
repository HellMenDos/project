
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import WorkCard from './sub-components/work-card';
import { ServerData } from '../types/common'
import 'swiper/css';


const Works: FC<{data: ServerData[]}> = ({data}) =>{
  return (
      <>
        <section className="works" id="works">

        <h1 className="heading">Наши работы</h1>

        <div className="swiper blogs-slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={true}
                loop={true}
                effect="fade"
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                data.map((item: ServerData) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <WorkCard item={item} />
                        </SwiperSlide>
                    )
                }) 
                }  
            </Swiper>

        </div>

        </section>
      </>
  )
}

export default Works


