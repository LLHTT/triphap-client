import './Carousel.scss'
import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/pagination'

const Carousel = ({ children, slides }) => {
  SwiperCore.use([Autoplay])

  return (
    <Swiper
      module={[Pagination]}
      spaceBetween={50}
      slidesPerView={slides}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
    >
      {children}
      {/* PAGINATION MARGIN */}
      <div style={{ marginTop: "70px" }}></div>
    </Swiper>
  )
}

Carousel.defaultProps = {
  slides: "auto",
}

export default Carousel