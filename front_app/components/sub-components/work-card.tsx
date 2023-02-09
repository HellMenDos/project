
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ServerData,File } from '../../types/common'
import Image from 'next/image';
import 'swiper/css';
import "swiper/css/navigation"

const WorkCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <div className="swiper-slide slide">
        <div className="image image-work">
          {/* @ts-ignore */}
          <img src={item.files[0].photo} alt="" />
        </div>
        
        <div className="content">
            <h3>{item.title}</h3>
            <p>{item.describe}</p>
            <a href={item?.button_url ? item?.button_url : '#contact'} className="btn">Подробнее</a>
        </div>
    </div>
  )
}

export default WorkCard
